import { Righteous } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const font = Righteous({
  subsets: ['latin'],
  weight: '400',
});

export default function BigLogo() {
  return (
    <Link
      className={`flex flex-col items-center gap-2 ${font.className}`}
      href="/"
    >
      <Image alt="logo" height={100} src="/logo.svg" width={100} />
      <h1 className="text-5xl ">
        CONVIT<span className="text-blue-500">3</span> DIGITAL
      </h1>
    </Link>
  );
}
