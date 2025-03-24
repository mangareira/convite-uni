'use client';
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';

import {
  createEventEmpty,
  createGuestEmpty,
  DateTime,
  Event,
  events,
  Guest,
} from 'core';
import { useRouter } from 'next/navigation';

import useAPI from '../hooks/useAPI';

import { ContextEventProps } from '@/utils/interfaces/context-props';
import useMensagens from '../hooks/useMensagens';

const ContextEvent = createContext<ContextEventProps>({
  addGuest: () => {},
  alterEvent: () => {},
  alterGuest: () => {},
  event: events[0],
  guest: events[0].guests[0],
  loadEvent: async () => {},
  saveEvent: async () => {},
  aliasValid: true,
});

export function ProviderContextEvents(props: { children: ReactNode }) {
  const { httpGet, httpPost } = useAPI();
  const { addSuccess, addError } = useMensagens();

  const [aliasValid, setAliasValid] = useState(true);
  const [event, setEvent] = useState<Partial<Event>>(createEventEmpty());
  const [guest, setGuest] = useState<Partial<Guest>>(createGuestEmpty());

  const router = useRouter();

  const saveEvent = useCallback(async () => {
    try {
      const createEvent = await httpPost<Event, Partial<Event>>(
        'events',
        event
      );

      router.push('/event/success/');
      setEvent({
        ...createEvent,
        date: DateTime.deform(String(createEvent?.date)),
      });
    } catch (error: any) {
      addError(error.message ?? 'Ocorreu um erro inesperado');
    }
  }, [addError, event, httpPost, router]);

  const loadEvent = useCallback(
    async (idOrAlias: string) => {
      try {
        const event = await httpGet<Event>(`events/${idOrAlias}`);
        if (!event) return;
        setEvent({
          ...event,
          date: DateTime.deform(String(event?.date)),
        });
      } catch (error: any) {
        addError(error.message ?? 'Ocorreu um erro inesperado');
      }
    },
    [addError, httpGet, setEvent]
  );

  const addGuest = useCallback(async () => {
    try {
      await httpPost<any, Partial<Event>>(`events/${event.alias}/guest`, guest);
      router.push('/invite/thankyou');
    } catch (error: any) {
      addError(error.message ?? 'Ocorreu um erro inesperado');
    }
  }, [addError, event.alias, guest, httpPost, router]);

  const validateAlias = useCallback(async () => {
    try {
      const { valid } = await httpGet(
        `events/validate/${event.alias}/${event.id}`
      );
      setAliasValid(valid);
    } catch (error: any) {
      addError(error.message ?? 'Ocorreu um erro inesperado');
    }
  }, [addError, event.alias, event.id, httpGet]);

  useEffect(() => {
    if (event.alias) validateAlias();
  }, [event.alias, validateAlias]);

  return (
    <ContextEvent.Provider
      value={{
        aliasValid,
        event,
        guest,
        alterEvent: setEvent,
        alterGuest: setGuest,
        saveEvent,
        loadEvent,
        addGuest,
      }}
    >
      {props.children}
    </ContextEvent.Provider>
  );
}

export default ContextEvent;
