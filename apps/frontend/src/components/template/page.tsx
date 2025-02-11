import Logo from './logo';

import { PageProps } from '@/utils/interfaces/page-props';

export default function Page({ children, className }: PageProps) {
  return (
    <div className="flex flex-col items-center py-10 min-h-screen bg-[url('/background.png')] bg-cover ">
      <Logo />
      <main
        className={` flex-1 flex flex-col justify-center py-10 container  ${className}`}
      >
        {children}
      </main>
    </div>
  );
}
