import Link from 'next/link';

import BigLogo from '@/components/template/bigLogo';

export default function Home() {
  return (
    <div className="h-screen bg-[url('/background-inicial.svg')] flex flex-col justify-center items-center bg-center gap-10">
      <div className="flex flex-col items-center gap-4">
        <BigLogo />
        <p className="text-zinc-500 font-light w-96 leading-6 text-center select-none">
          Crie e gerencie o convinte do seu evento de forma rápida e fácil, sem
          complicações!
        </p>
      </div>
      <Link className="button blue text-lg uppercase" href="/event">
        Crie o seu evento
      </Link>
    </div>
  );
}
