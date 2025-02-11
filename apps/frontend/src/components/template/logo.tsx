import { Righteous } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const font = Righteous({
  subsets: ['latin'],
  weight: '400',
});

export default function Logo() {
  return (
    <Link className={`flex items-center gap-2 ${font.className}`} href="/">
      <Image alt="logo" height={50} src="/logo.svg" width={50} />
      <h1 className="leading-4 flex flex-col items-center text-lg ">
        <div>
          CONVIT<span className="text-blue-500">3</span>
        </div>
        <div>DIGITAL</div>
      </h1>
    </Link>
  );
}
