import { Event } from 'core';
import QRCode from 'react-qr-code';


export default function Qrcode(props: { event: Event }) {
  return (
    <div className="flex flex-col items-center gap-4 border border-zinc-800 px-10 ">
      <span className="text-sm font-light text-zinc-400">
        Acesse via mobile
      </span>
      <QRCode
        className="w-32 h-32"
        value={JSON.stringify({
          id: props.event.id,
          password: props.event.password,
        })}
      />
    </div>
  );
}
