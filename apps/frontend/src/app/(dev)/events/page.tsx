import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import QRCode from 'react-qr-code';
import { events } from 'core';


export default function page() {
  return (
    <div className="grid grid-cols-3 gap-5">
      {events.map((event) => (
        <div
          key={event.id}
          className="flex flex-col bg-zinc-800 rounded-lg w-full"
        >
          <div className="relative w-full h-44">
            <Image
              fill
              alt={event.name}
              className="object-cover"
              src={event.image}
            />
          </div>
          <div className="flex flex-col flex-1 p-7 gap-5 items-center">
            <span className="text-lg font-black">{event.name}</span>
            <p className="flex-1 text-sm text-zinc-400 text-center">
              {event.description}
            </p>
            <QRCode
              className="w-44 h-44"
              value={JSON.stringify({ id: event.id, password: event.password })}
            />
            <div className="flex gap-5">
              <Link
                className="button red flex-1"
                href={`/event/admin/${event.id}/${event.password}`}
              >
                Admin
              </Link>
              <Link
                className="button green flex-1"
                href={`/invite/${String(event.name)
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .replace(/ç/g, 'c')
                  .replace(/\s+/g, '-')
                  .toLowerCase()}`}
              >
                Invite
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
