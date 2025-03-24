import InputFieldProps from '@/utils/interfaces/InputFieldProps';

export default function InputField(props: InputFieldProps) {
  return (
    <div className={`flex flex-col gap-2 ${props.outerclassname ?? ''} `}>
      <div className="flex flex-col">
        {props.label && (
          <label className="text-lg font-black text-white">{props.label}</label>
        )}
        {props.description && (
          <p className="text-sm font-light text-zinc-400 -mt-1">
            {props.description}
          </p>
        )}
      </div>
      <input
        {...props}
        className="w-full px-3 py-2 border rounded-md bg-black/50 border-white/20 focus:border-white/50"
        type={props.type ?? 'text'}
      />
      {props.error && (
        <span className="pl-2 text-sm text-red-500">{props.error}</span>
      )}
      {!props.error && props.observation && (
        <span className="pl-2 text-xs text-yellow-300">
          {props.observation}
        </span>
      )}
    </div>
  );
}
