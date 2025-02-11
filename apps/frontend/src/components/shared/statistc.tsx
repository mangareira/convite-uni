import Image from 'next/image';

import { StatistcProps } from '@/utils/interfaces/statistc-props';

export default function Statistc(props: StatistcProps) {
  return (
    <div className="flex items-center bg-zinc-900 rounded-lg px-6 py-2.5 gap-5">
      <div className="flex-1 flex flex-col">
        <span className="font-light text-zinc-400">{props.text}</span>
        <span className="text-2xl font-black">{props.value}</span>
      </div>
      <Image alt="icon" height={80} src={props.image} width={80} />
    </div>
  );
}
