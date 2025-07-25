import { Guest } from 'core';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import {
  BorderStyle,
  Document,
  HeightRule,
  ImageRun,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  VerticalAlign,
  WidthType,
} from 'docx';
import * as fs from 'node:fs/promises';
import * as path from 'node:path/posix';

export async function createReportPdf(guests: Guest[]): Promise<Buffer> {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 800]);
  const { height, width } = page.getSize();

  console.log('Page size:', { height, width });

  const fontSize = 12;
  const titleFontSize = 20;
  const sectionTitleFontSize = 14;

  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaBoldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  console.log('Font loaded:');
  console.log('Helvetica:', !!helveticaFont);
  console.log('Helvetica Bold:', !!helveticaBoldFont);

  let y = height - 60;
  console.log('Initial Y:', y);

  // Título centralizado
  const titleText = 'RELATÓRIO DE CONFIRMAÇÕES';
  const titleWidth = helveticaBoldFont.widthOfTextAtSize(
    titleText,
    titleFontSize,
  );
  console.log('Title width:', titleWidth);

  page.drawText(titleText, {
    x: width / 2 - titleWidth / 2,
    y,
    size: titleFontSize,
    font: helveticaBoldFont,
    color: rgb(0.2, 0.2, 0.6),
  });

  y -= 40;
  console.log('Y after title:', y);

  // Linha divisória
  page.drawLine({
    start: { x: 50, y },
    end: { x: width - 50, y },
    thickness: 1,
    color: rgb(0.8, 0.8, 0.8),
  });

  y -= 30;
  console.log('Y before CONFIRMADOS:', y);
  console.log('sectionTitleFontSize:', sectionTitleFontSize);

  // Confirmados
  try {
    page.drawText('CONFIRMADOS', {
      x: 50,
      y,
      size: sectionTitleFontSize,
      font: helveticaBoldFont,
      color: rgb(0, 0.5, 0),
    });
  } catch (err) {
    console.error('Erro ao desenhar "CONFIRMADOS":', err);
  }

  y -= 25;
  console.log('Y before guests confirmed:', y);

  const confirmed = guests.filter((g) => g.confirmed);
  console.log('Total confirmados:', confirmed.length);

  confirmed.forEach((guest) => {
    console.log(`Desenhando confirmado: ${guest.name}`);
    try {
      page.drawText(`• ${guest.name}`, {
        x: 65,
        y,
        size: fontSize,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });
    } catch (err) {
      console.error(`Erro ao desenhar confirmado ${guest.name}:`, err);
    }
    y -= 18;
  });

  y -= 20;
  console.log('Y before line 2:', y);

  // Linha divisória
  page.drawLine({
    start: { x: 50, y },
    end: { x: width - 50, y },
    thickness: 1,
    color: rgb(0.8, 0.8, 0.8),
  });

  y -= 30;
  console.log('Y before AUSENTES:', y);

  try {
    page.drawText('AUSENTES', {
      x: 50,
      y,
      size: sectionTitleFontSize,
      font: helveticaBoldFont,
      color: rgb(0.8, 0, 0),
    });
  } catch (err) {
    console.error('Erro ao desenhar "AUSENTES":', err);
  }

  y -= 25;

  const absents = guests.filter((g) => !g.confirmed);
  console.log('Total ausentes:', absents.length);

  absents.forEach((guest) => {
    console.log(`Desenhando ausente: ${guest.name}`);
    try {
      page.drawText(`• ${guest.name}`, {
        x: 65,
        y,
        size: fontSize,
        font: helveticaFont,
        color: rgb(0.2, 0.2, 0.2),
      });
    } catch (err) {
      console.error(`Erro ao desenhar ausente ${guest.name}:`, err);
    }
    y -= 18;
  });

  // Rodapé
  const currentDate = new Date().toLocaleDateString();
  console.log('Data atual:', currentDate);

  try {
    page.drawText(`Gerado em: ${currentDate}`, {
      x: 50,
      y: 40,
      size: 10,
      font: helveticaFont,
      color: rgb(0.5, 0.5, 0.5),
    });
  } catch (err) {
    console.error('Erro ao desenhar rodapé:', err);
  }

  const pdfBytes = await pdfDoc.save();
  return Buffer.from(pdfBytes);
}

export async function createAttendanceSheet(guests: Guest[]): Promise<Buffer> {
  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 1000, // Margem superior maior
              right: 1000, // Margem direita
              bottom: 1000, // Margem inferior
              left: 1000, // Margem esquerda
            },
          },
        },
        headers: {
          default: {
            options: {
              children: [
                // Cabeçalho simplificado para não ocupar muito espaço
                new Paragraph({
                  children: [
                    new ImageRun({
                      data: await fs.readFile(
                        path.resolve(__dirname, '../infra/tmp/logo.png'),
                      ),
                      transformation: {
                        height: 120,
                        width: 600,
                      },
                      type: 'png',
                    }),
                  ],
                  alignment: 'center',
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'FACULDADE DO CENTRO MARANHENSE - FCMA',
                      bold: true,
                      size: 20, // Tamanho reduzido
                    }),
                  ],
                  alignment: 'center',
                  spacing: { after: 100 }, // Espaço após
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Credenciada pelo Ministério da Educação - MEC Portaria no. 135, de 02 de fevereiro de 2017`,
                      size: 18,
                    }),
                  ],
                  alignment: 'center',
                  spacing: { after: 100 },
                }),
              ],
            },
          },
        },
        children: [
          // Título com mais destaque
          new Paragraph({
            children: [
              new TextRun({
                text: `LISTA DE PRESENÇA`,
                size: `${28}pt`, // Tamanho aumentado
                allCaps: true,
                bold: true,
                color: '2c3e50', // Cor mais escura
              }),
            ],
            alignment: 'center',
            spacing: { before: 400, after: 400 }, // Espaço antes e depois
          }),

          new Table({
            width: {
              size: 100, // 100% da largura
              type: WidthType.PERCENTAGE,
            },
            borders: {
              top: { style: BorderStyle.SINGLE, size: 4, color: 'auto' },
              bottom: { style: BorderStyle.SINGLE, size: 4, color: 'auto' },
              left: { style: BorderStyle.SINGLE, size: 4, color: 'auto' },
              right: { style: BorderStyle.SINGLE, size: 4, color: 'auto' },
              insideHorizontal: {
                style: BorderStyle.SINGLE,
                size: 2,
                color: 'auto',
              },
              insideVertical: {
                style: BorderStyle.SINGLE,
                size: 2,
                color: 'auto',
              },
            },
            columnWidths: [4000, 5000], // Largura das colunas em DXA
            rows: [
              // Cabeçalho da Tabela com estilo melhorado
              new TableRow({
                height: { value: 600, rule: HeightRule.EXACT }, // Altura fixa
                children: [
                  new TableCell({
                    children: [
                      new Paragraph({
                        alignment: 'center',
                        children: [
                          new TextRun({
                            text: 'Participante',
                            bold: true,
                            size: `${16}pt`, // Tamanho aumentado
                            color: 'ffffff', // Texto branco
                          }),
                        ],
                      }),
                    ],
                    shading: { fill: '2c3e50' }, // Fundo escuro
                    verticalAlign: VerticalAlign.CENTER,
                  }),
                  new TableCell({
                    children: [
                      new Paragraph({
                        alignment: 'center',
                        children: [
                          new TextRun({
                            text: 'Assinatura',
                            bold: true,
                            size: `${16}pt`,
                            color: 'ffffff',
                          }),
                        ],
                      }),
                    ],
                    shading: { fill: '2c3e50' },
                    verticalAlign: VerticalAlign.CENTER,
                  }),
                ],
              }),

              // Linhas dos participantes com mais espaço
              ...guests.map((participant) => {
                return new TableRow({
                  height: { value: 800, rule: 'atLeast' }, // Altura maior
                  children: [
                    // Célula do nome
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: participant.name,
                              size: `${14}pt`, // Tamanho aumentado
                            }),
                          ],
                          spacing: { line: 300 }, // Espaçamento entre linhas
                        }),
                      ],
                      verticalAlign: VerticalAlign.CENTER,
                      margins: { top: 200, bottom: 200, left: 200, right: 200 },
                    }),

                    // Célula de assinatura com espaço amplo
                    new TableCell({
                      children: [new Paragraph('')],
                      verticalAlign: VerticalAlign.CENTER,
                    }),
                  ],
                });
              }),
            ],
          }),

          // Rodapé com instruções
          new Paragraph({
            children: [
              new TextRun({
                text: 'Instruções:',
                bold: true,
                size: `${14}pt`,
              }),
            ],
            spacing: { before: 400, after: 100 },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: '1. Por favor, assine ao lado do seu nome',
                size: `${12}pt`,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `2. Lista contém ${guests.length} participantes`,
                size: `${12}pt`,
              }),
            ],
            spacing: { after: 200 },
          }),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  return buffer;
}
