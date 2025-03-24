import { ReactNode } from 'react';

export type WindowProps = {
  label?: string;
  title?: string;
  image?: string;
  background?: string;
  children: ReactNode;
};
