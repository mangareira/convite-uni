import { Inter } from 'next/font/google';

import type { Metadata } from 'next';

import './globals.css';

const font = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Faça seu convite aqui',
  description: 'Unicentroma',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={font.className}>{children}</body>
    </html>
  );
}
