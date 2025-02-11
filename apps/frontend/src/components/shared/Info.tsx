import { InfoProps } from '@/utils/interfaces/info-props';

export default function Info(props: InfoProps) {
  return (
    <div className="flex-1 flex flex-col items-start border border-zinc-800 px-6 py-3 rounded-lg">
      <span className="text-zinc-400 font-bold"> {props.label} </span>
      <span className="text-xl"> {props.children} </span>
    </div>
  );
}
