import { Id } from '../../shared';
import Guest from '../model/Guest';


export default function createGuestEmpty(): Partial<Guest> {
  return {
    id: Id.new(),
    name: '',
    email: '',
    confirmed: true,
    hasCompanions: false,
    qtdCompanion: 0,
  };
}
