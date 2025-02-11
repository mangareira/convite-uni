import Guest from '../model/Guest';

export default function validateGuest(guest: Partial<Guest>): string[] {
  const errors: string[] = [];

  if (!guest.name) errors.push('Nome obrigatório');
  if (!guest.email) errors.push('Email obrigatório');

  return errors;
}
