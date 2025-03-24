'use client';

import { use, useEffect } from 'react';

import { Event } from 'core';

import InfoEvent from '@/components/events/InfoEvent';
import Window from '@/components/shared/Window';
import useEvent from '@/data/hooks/useEvent';
import Loading from '@/components/shared/Loading';
import FormGuest from '@/components/events/FormGuest';

export default function Invite(props: any) {
  const params: { alias: string } = use(props.params);

  const { guest, event, loadEvent, alterGuest, addGuest } = useEvent();

  useEffect(() => {
    loadEvent(params.alias);
  }, [loadEvent, params.alias]);

  const newDate = `${event.date?.toISOString().split('T')[0]}T${Number(event.date?.toLocaleTimeString().split(':')[0]) - 3}:${event.date?.toLocaleTimeString().split(':')[1]}`;

  return event.alias ? (
    <div className="">
      <Window
        background={event.imageBackground}
        image={event.image}
        label="Você foi convidado para:"
        title={event.name}
      >
        <InfoEvent
          event={{ ...event, date: new Date(newDate) } as Event}
          hideName={true}
        />
        <div className="flex flex-col gap-4 pt-10">
          <span className="text-xl font-bold">Insira seus dados</span>
          <div className="border-t border-zinc-800"></div>
          <FormGuest alterGuest={alterGuest} guest={guest} />
          <button
            className={`button self-center ${guest.confirmed ? 'green' : 'red'}`}
            onClick={addGuest}
          >
            Confirmar {guest.confirmed ? 'Presença' : 'Ausencia'}
          </button>
        </div>
      </Window>
    </div>
  ) : (
    <Loading />
  );
}
