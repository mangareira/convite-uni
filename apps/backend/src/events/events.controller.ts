import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import {
  complementEvent,
  complementGuest,
  DateTime,
  Event,
  Guest,
  Id,
} from 'core';
import { EventPrisma } from './event.prisma';
import { createAttendanceSheet, createReportPdf } from 'src/function/pdf';
import { Response } from 'express';
import * as archiver from 'archiver';

@Controller('events')
export class EventsController {
  constructor(readonly repo: EventPrisma) {}

  @Post()
  async saveEvent(@Body() event: Event) {
    const eventSignUp = await this.repo.getByAlias(event.alias);

    if (eventSignUp && eventSignUp.id !== event.id)
      throw new HttpException('Já existe um evento com esse alias.', 400);
    const eventComplete = complementEvent(this.inserial(event));
    await this.repo.save(eventComplete);
    return this.serial(eventComplete);
  }

  @Post(':alias/guest')
  async saveGuest(@Param('alias') alias: string, @Body() guest: Guest) {
    const event = await this.repo.getByAlias(alias);
    if (!event) throw new HttpException('Evento não encontrado', 400);

    const guestComplet = complementGuest(guest);
    return this.repo.saveGuest(event, guestComplet);
  }

  @Post('access')
  async accessEvent(@Body() data: { id: string; password: string }) {
    const event = await this.repo.getById(data.id, true);

    if (!event) {
      throw new HttpException('Evento não encontrado', 400);
    }

    if (event.password !== data.password) {
      throw new HttpException('Senha não corresponde ao evento', 400);
    }

    return this.serial(event);
  }

  @Post('pdf')
  async pdf(@Body() data: { id: string }, @Res() res: Response) {
    const event = await this.repo.getById(data.id, true);

    if (!event) {
      throw new HttpException('Evento não encontrado', 400);
    }

    const reportPdf = await createReportPdf(event.guests);
    const attendancePdf = await createAttendanceSheet(event.guests);

    // Configurar resposta como ZIP
    res.setHeader('Content-Type', 'application/zip');
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=documentos_evento.zip',
    );

    const archive = archiver('zip', { zlib: { level: 9 } });
    archive.pipe(res);

    archive.append(reportPdf, { name: 'relatorio.pdf' });
    archive.append(attendancePdf, { name: 'lista_presenca.doc' });

    await archive.finalize();
  }

  @Get()
  async getEvents() {
    const events = await this.repo.getAll();
    return events.map((ev) => this.serial(ev));
  }

  @Get(':idOrAlias')
  async getEvent(@Param('idOrAlias') idOrAlias: string) {
    let event: Event;
    if (Id.valido(idOrAlias)) {
      event = await this.repo.getById(idOrAlias, true);
    } else {
      event = await this.repo.getByAlias(idOrAlias, true);
    }
    return this.serial(event);
  }

  @Get('validate/:alias/:id')
  async validadeAlias(@Param('alias') alias: string, @Param('id') id: string) {
    const event = await this.repo.getByAlias(alias);
    return { valid: !event || event.id === id };
  }

  private serial(events: Event) {
    if (!events) return null;
    return {
      ...events,
      date: DateTime.format(events.date),
    };
  }

  private inserial(event: Event): Event {
    return {
      ...event,
      date: DateTime.deform(String(event.date)),
    } as Event;
  }
}
