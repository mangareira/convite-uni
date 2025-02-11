import { Injectable } from '@nestjs/common';
import { Event, Guest } from 'core';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class EventPrisma {
  constructor(readonly prisma: PrismaProvider) {}

  save(event: Event) {
    return this.prisma.event.create({
      data: {
        ...event,
        guests: {
          create: event.guests,
        },
      },
    });
  }
  saveGuest(event: Event, guest: Guest) {
    return this.prisma.guest.create({
      data: {
        ...guest,
        qtdCompanion: +(guest.qtdCompanion ?? 0),
        event: { connect: { id: event.id } },
      },
    });
  }

  async getAll(): Promise<Event[]> {
    return this.prisma.event.findMany({
      include: { guests: true },
    });
  }

  async getById(id: string, complete?: boolean): Promise<Event | null> {
    return this.prisma.event.findUnique({
      where: { id },
      include: { guests: complete },
    });
  }
  async getByAlias(
    alias: string,
    complete: boolean = false,
  ): Promise<Event | null> {
    return this.prisma.event.findUnique({
      where: { alias },
      select: {
        id: true,
        name: true,
        description: true,
        date: true,
        local: true,
        image: true,
        imageBackground: true,
        alias: true,
        password: complete,
        expectedAudience: complete,
        guests: complete,
      },
    });
  }
}
