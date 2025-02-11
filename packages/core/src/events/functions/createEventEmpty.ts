import { Id } from '../../shared';
import Event from '../model/Event';


export default function createEventEmpty(): Partial<Event> {
  return {
    id: Id.new(),
    name: '',
    description: '',
    date: new Date(),
    local: '',
    expectedAudience: 1,
    image: '',
    imageBackground: '',
  };
}
