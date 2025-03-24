import { Guest } from 'core';

export interface FormGuestProps {
  guest: Partial<Guest>;
  alterGuest: (guest: Partial<Guest>) => void;
}
