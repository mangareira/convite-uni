import Image from 'next/image';

export default function Thankyou() {
  return (
    <div className="flex flex-col items-center gpa-5">
      <Image alt="Mascote" height={300} src={'/mascote.png'} width={300} />
      <span className="text-3xl font-black">Muito Obrigado!</span>
      <span className="text-zinc-400 -mt-5">
        Sua confirmação é muito importante para nós!
      </span>
    </div>
  );
}
