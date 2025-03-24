import Image from 'next/image';

import { WindowProps } from '@/utils/interfaces/window-props';

export default function Window({
  children,
  background,
  image,
  label,
  title,
}: WindowProps) {
  return (
    <div className="relative rounded-xl overflow-hidden border border-zinc-800">
      <Image
        fill
        alt="background"
        className="-z-30 object-cover"
        src={
          background
            ? background
            : 'https://www.nuvent.com.br/wp-content/uploads/2019/12/EVP_0141-scaled.jpg'
        }
      />
      <div className="bg-black/80">
        <div className="flex gap-7 p-6 items-center">
          <div className="w-28 h-28 rounded-full relative ">
            <Image
              fill
              alt="imagem do evento"
              className="rounded-full object-cover"
              src={
                image
                  ? image
                  : 'https://t3.ftcdn.net/jpg/08/12/70/12/360_F_812701281_qDF1YDwHrQgs2BbUCIrgqzkdkNhokjwp.jpg'
              }
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-zinc-300">
              {label ?? 'Detalhes do evento:'}
            </span>
            <span className="text-4xl font-bold">
              {title ?? 'Título do evento'}
            </span>
          </div>
          <div className="flex-1"></div>
          <Image
            alt="Elementos decorativos"
            height={140}
            src={'/elementos.png'}
            width={140}
          />
        </div>
        <div className="bg-black/70 border-t-4 border-zinc-800 rounded-b-xl p-7">
          {children}
        </div>
      </div>
    </div>
  );
}
