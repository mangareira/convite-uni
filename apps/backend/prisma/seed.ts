import { PrismaClient } from '@prisma/client';
import { events } from 'core';

const prisma = new PrismaClient();

async function seed() {
  const transactions = events.map(async (event) => {
    await prisma.event.create({
      data: {
        id: event.id,
        alias: event.alias,
        password: event.password,
        name: event.name,
        date: event.date,
        local: event.local,
        description: event.description,
        image: event.image,
        imageBackground: event.imageBackground,
        expectedAudience: event.expectedAudience,
        guests: {
          create: event.guests.map((guest) => ({
            id: guest.id,
            name: guest.name,
            email: guest.email,
            confirmed: guest.confirmed,
            hasCompanions: guest.hasCompanions,
            qtdCompanion: guest.qtdCompanion,
          })),
        },
      },
    });
  });

  await Promise.all(transactions);
}

seed();
