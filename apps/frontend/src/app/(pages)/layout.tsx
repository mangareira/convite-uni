import { ReactNode } from 'react';

import Page from '@/components/template/page';
import { ProviderContextEvents } from '@/data/contexts/ContextEvents';
import { ContextMensagensProvider } from '@/data/contexts/ContextMensagens';
import { Toaster } from '@/components/ui/toaster';

type Props = {
  children: ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <ContextMensagensProvider>
      <ProviderContextEvents>
        <Page>{children}</Page>
        <Toaster />
      </ProviderContextEvents>
    </ContextMensagensProvider>
  );
}
