'use client';
import { ContextMensagensProps } from '@/utils/interfaces/ContextMensagensProps';
import { createContext, ReactNode, useCallback } from 'react';
import { useToast } from '../hooks/useToast';

const ContextMensagens = createContext<ContextMensagensProps>({
  addSuccess: () => {},
  addError: () => {},
});

export function ContextMensagensProvider(props: { children: ReactNode }) {
  const { toast } = useToast();

  const addMessage = useCallback(
    (type: 'success' | 'error', text: string) => {
      toast({
        title:
          type == 'success' ? 'Tudo certo por aqui!' : 'Ops, algo deu errado',
        duration: 5000,
        description: text.split(/\n/).map((l) => <p key={l}>{l}</p>),
        variant: type == 'success' ? 'default' : 'destructive',
      });
    },
    [toast]
  );

  return (
    <ContextMensagens.Provider
      value={{
        addSuccess: (text) => {
          addMessage('success', text);
        },
        addError: (text) => {
          addMessage('error', text);
        },
      }}
    >
      {props.children}
    </ContextMensagens.Provider>
  );
}

export default ContextMensagens;
