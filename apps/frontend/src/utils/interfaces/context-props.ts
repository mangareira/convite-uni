import { Event, Guest } from 'core';

export type ContextEventProps = {
  event: Partial<Event>;
  guest: Partial<Guest>;
  aliasValid: boolean;
  alterEvent: (event: Partial<Event>) => void;
  alterGuest: (guest: Partial<Guest>) => void;
  loadEvent: (idOrAlias: string) => Promise<void>;
  saveEvent: () => Promise<void>;
  addGuest: () => void;
};
