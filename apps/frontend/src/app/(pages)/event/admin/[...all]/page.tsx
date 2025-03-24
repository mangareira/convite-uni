'use client';

import { use, useCallback, useEffect, useState } from 'react';

import { Event, events, Guest } from 'core';

import DashboardEvent from '@/components/events/DashboardEvent';
import FormPasswordEvent from '@/components/events/FormPasswordEvent';
import useAPI from '@/data/hooks/useAPI';

export default function Page(props: any) {
  const { httpPost } = useAPI();

  const params: any = use(props.params);
  const id = params.all[0];

  const [event, setEvent] = useState<Event | null>(null);
  const [password, setPassword] = useState<string>(params.all[1] ?? '');

  const confirmeds = event?.guests.filter((c) => c.confirmed) ?? [];
  const absents = event?.guests.filter((c) => !c.confirmed) ?? [];

  const allTotal = confirmeds.reduce((total: number, guest: Guest) => {
    return total + guest.qtdCompanion + 1;
  }, 0);

  const getEvent = useCallback(async () => {
    if (!id || !password) return;
    const event = await httpPost<Event, { id: string; password: string }>(
      'events/access',
      { id, password }
    );
    setEvent(event);
  }, [httpPost, id, password]);

  useEffect(() => {
    const loadEvent = () => {
      const event = events.find(
        (ev) => ev.id === id && ev.password === password
      );
      setEvent(event ?? null);
    };
    loadEvent();
  }, [id, password]);

  return (
    <div className="flex flex-col items-center">
      {event ? (
        <DashboardEvent
          absents={absents}
          event={event}
          guests={confirmeds}
          refreshListGuests={getEvent}
          totalAll={allTotal}
        />
      ) : (
        <FormPasswordEvent
          accessEvent={getEvent}
          password={password}
          setPassword={setPassword}
        />
      )}
    </div>
  );
}
