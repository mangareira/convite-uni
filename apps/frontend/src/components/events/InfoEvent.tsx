import { Event } from 'core';
import Info from '../shared/Info';


export default function InfoEvent(props: { event: Event; className?: string }) {
  const { event } = props;
  return (
    <div className={`flex flex-col gap-2 ${props.className ?? ''} `}>
      <div className="flex-1 flex items-center gap-4 border border-zinc-800 px-6 py-3 rounded-lg">
        <span className="text-2xl font-black">{event.alias}</span>
        <span className="text-xl text-zinc-300">{event.name}</span>
      </div>
      <div className="gap-2 flex">
        <Info label="Data:">
          <span>
            {new Date(event.date!).toLocaleDateString()}
            {' às '}
            {new Date(event.date!).toLocaleTimeString()}
          </span>
        </Info>
        <Info label="Local:">{event.local}</Info>
      </div>
      <Info label="Descrição:">{event.description}</Info>
    </div>
  );
}
