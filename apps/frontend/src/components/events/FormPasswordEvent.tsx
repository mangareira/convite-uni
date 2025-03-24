import InputField from '../shared/InputField';

import { FormPasswordEventsProps } from '@/utils/interfaces/Form-password-props';

export default function FormPasswordEvent(props: FormPasswordEventsProps) {
  return (
    <div className="flex flex-col items-center gap-4 bg-zinc-900 p-8 rounded-lg shadow-lg w-96 border border-zinc-700">
      <h1 className="text-3xl font-black">Bem-vindo(a)</h1>
      <h2 className="text-lg font-semibold -mt-3">Adminstrador</h2>
      <p className="text-sm text-zinc-400">
        Insira sua senha para gerenciar o evento
      </p>
      <InputField
        outerclassname="w-full"
        placeholder="Digite sua senha"
        type="password"
        value={props.password}
        onChange={(e) => props.setPassword(e.target.value)}
      />
      <button className="button blue" onClick={props.accessEvent}>
        Acessar Evento
      </button>
    </div>
  );
}
