import { Id, Password } from '../../shared';
import Event from '../model/Event';

import validateEvent from './validateEvent';


export default function complementEvent(event: Partial<Event>): Event {
  const error = validateEvent(event);

  if (error.length) {
    throw new Error(error.join('\n'));
  }

  const createEvent: Event = {
    ...event,
    id: event.id ?? Id.new(),
    password: event.password ?? Password.create(),
    expectedAudience: +(event.expectedAudience ?? 1),
  } as Event;

  return createEvent;
}
