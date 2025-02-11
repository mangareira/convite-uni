import Guest from '../model/Guest';

import validateGuest from './validateGuest';

export default function complementGuest(guest: Partial<Guest>): Guest {
  const error = validateGuest(guest);

  if (error.length > 0) {
    throw new Error(error.join('\n'));
  }

  const qtdCompanion = guest.qtdCompanion ?? 0;

  const hasCompanions =
    guest.hasCompanions && guest.confirmed && qtdCompanion > 0;

  const createGuest = {
    ...guest,
    qtdCompanion: hasCompanions ? qtdCompanion : 0,
    hasCompanions,
  };

  return createGuest as Guest;
}
