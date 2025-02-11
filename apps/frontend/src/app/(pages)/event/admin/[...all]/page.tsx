'use client';

import { use, useEffect, useState } from 'react';

import DashboardEvent from '@/components/events/DashboardEvent';
import FormPasswordEvent from '@/components/events/FormPasswordEvent';
import { Event, events, Guest } from 'core';

export default function Page(props: any) {
  const params: any = use(props.params);
  const id = params.all[0];

  const [event, setEvent] = useState<Event | null>(null);
  const [password, setPassword] = useState<string | null>(
    params.all[1] ?? null
  );

  const confirmeds = event?.guests.filter((c) => c.confirmed) ?? [];
  const absents = event?.guests.filter((c) => !c.confirmed) ?? [];

  const allTotal = confirmeds.reduce((total: number, guest: Guest) => {
    return total + guest.qtdCompanion + 1;
  }, 0);

  useEffect(() => {
    const getEvent = () => {
      const event = events.find(
        (ev) => ev.id === id && ev.password === password
      );
      setEvent(event ?? null);
    };
    getEvent();
  }, [id, password]);

  return (
    <div className="flex flex-col items-center">
      {event ? (
        <DashboardEvent
          absents={absents}
          event={event}
          guests={confirmeds}
          totalAll={allTotal}
        />
      ) : (
        <FormPasswordEvent />
      )}
    </div>
  );
}
