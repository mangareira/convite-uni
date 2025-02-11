import { ReactNode } from 'react';

import Page from '@/components/template/page';

type Props = {
  children: ReactNode;
};

export default function layout({ children }: Props) {
  return <Page>{children}</Page>;
}
