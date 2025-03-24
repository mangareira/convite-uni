import { ReactNode } from 'react';

export type StepsProps = {
  labels: string[];
  labelAction: string;
  cofirmNextStep?: boolean[];
  action: () => void;
  children: ReactNode[];
};
