import { Guest } from 'core';
import GuestItem from './GuestItem';


export default function GuestList(props: { guests: Guest[] }) {
  return (
    <div className="">
      <ul className="flex flex-col gap-2">
        {props.guests.map((guest) => (
          <GuestItem key={guest.id} guest={guest} />
        ))}
      </ul>
    </div>
  );
}
