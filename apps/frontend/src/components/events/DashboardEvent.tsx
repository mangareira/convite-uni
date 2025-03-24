import { Event, Guest } from 'core';

import Statistc from '../shared/statistc';

import GuestList from './GuestList';
import InfoEvent from './InfoEvent';
import Qrcode from './Qrcode';

export default function DashboardEvent(props: {
  event: Event;
  guests: Guest[];
  absents: Guest[];
  totalAll: number | undefined;
  refreshListGuests: () => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 self-stretch">
        <InfoEvent className="flex-1" event={props.event} />
        <Qrcode event={props.event} />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        <Statistc
          image="/icones/convidados.svg"
          text="Expectativa de Convidados:"
          value={props.event.expectedAudience}
        />
        <Statistc
          image="/icones/confirmados.svg"
          text="Confirmações:"
          value={props.guests.length}
        />
        <Statistc
          image="/icones/acompanhantes.svg"
          text="Total confirmadas:"
          value={props.totalAll}
        />
      </div>
      <button
        className="button blue self-end mt-12"
        onClick={props.refreshListGuests}
      >
        <span>Atualizar Lista de convidados</span>
      </button>
      <span className="flex py-2 text-xl font-bold text-white/80">
        Convidados que confirmaram PRESENÇA
      </span>
      <GuestList guests={props.guests} />
      <span className="flex py-2 text-xl font-bold text-white/80">
        Convidados que confirmaram AUSÊNCIA
      </span>
      <GuestList guests={props.absents} />
    </div>
  );
}
