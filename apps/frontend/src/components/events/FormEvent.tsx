import { Alias, DateTime } from 'core';

import InputField from '../shared/InputField';
import Steps from '../shared/Steps';

import useEvent from '@/data/hooks/useEvent';

export default function FormEvent() {
  const { saveEvent, alterEvent, event, aliasValid } = useEvent();

  const labels = [
    'Identificação do Evento',
    'Local e Data',
    'Informações Finais',
  ];

  const confirmNextStep: boolean[] = [
    !!event.alias && !!event.name && aliasValid,
    !!event.date && !!event.local,
    !!event.description &&
      (event.expectedAudience ?? 0) > 0 &&
      !!event.image &&
      !!event.imageBackground,
  ];

  return (
    <div className="">
      <Steps
        action={saveEvent}
        cofirmNextStep={confirmNextStep}
        labelAction="Salvar"
        labels={labels}
      >
        <div className="flex flex-col gap-5">
          <InputField
            description="Identificador único e exclusivo para o evento (usado na URL)"
            error={aliasValid ? '' : 'Alias já foi usado em outro evento'}
            label="Identificador"
            value={Alias.format(event.alias ?? '')}
            onChange={(e) =>
              alterEvent({
                ...event,
                alias: Alias.format(e.target.value),
              })
            }
          />
          <InputField
            description="Nome do evento (ex: 'Reunião sobre aulas')"
            label="Nome do evento"
            value={event.name ?? ''}
            onChange={(e) =>
              alterEvent({
                ...event,
                name: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col gap-5">
          <InputField
            description="Data e hora em que o evento ocorrerá"
            label="Data"
            type="datetime-local"
            value={DateTime.format(event.date ?? new Date())}
            onChange={(e) =>
              alterEvent({
                ...event,
                date: DateTime.deform(e.target.value),
              })
            }
          />
          <InputField
            description="Local onde o evento será realizado"
            label="Local"
            value={event.local ?? ''}
            onChange={(e) =>
              alterEvent({
                ...event,
                local: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col gap-5">
          <InputField
            description="Descriação do evento (ex: 'So entra se trouxer presente')"
            label="Descrição"
            value={event.description ?? ''}
            onChange={(e) =>
              alterEvent({
                ...event,
                description: e.target.value,
              })
            }
          />
          <InputField
            description="URL da imagem sera exibida no convite"
            label="Imagem"
            value={event.image ?? ''}
            onChange={(e) =>
              alterEvent({
                ...event,
                image: e.target.value,
              })
            }
          />
          <InputField
            description="URL da imagem sera exibida como background no convite"
            label="background"
            value={event.imageBackground ?? ''}
            onChange={(e) =>
              alterEvent({
                ...event,
                imageBackground: e.target.value,
              })
            }
          />
          <InputField
            description="Total de convidados e acompanhates esperados"
            label="Público esperado"
            min={1}
            type="number"
            value={event.expectedAudience ?? ''}
            onChange={(e) =>
              alterEvent({
                ...event,
                expectedAudience: Number(e.target.value),
              })
            }
          />
        </div>
      </Steps>
    </div>
  );
}
