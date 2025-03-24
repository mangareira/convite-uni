'use client';
import { useEffect, useState } from 'react';

import { IconFingerprint, IconLink } from '@tabler/icons-react';
import { Event } from 'core';

import InfoEvent from '@/components/events/InfoEvent';
import Qrcode from '@/components/events/Qrcode';
import CopyClipBoard from '@/components/shared/CopyClipBoard';
import Window from '@/components/shared/Window';
import useEvent from '@/data/hooks/useEvent';

export default function SuccessPage() {
  const { event } = useEvent();

  const [urlCurrent, setUrlCurrent] = useState('');

  useEffect(() => {
    setUrlCurrent(window.location.origin);
  }, []);

  return event ? (
    <Window
      background={event.imageBackground}
      image={event.image}
      label="Seu evento foi criado:"
      title={event.name}
    >
      <InfoEvent hideName event={event as Event} />
      <div className="flex gap-5 items-center py-6">
        <div className="flex-1 flex flex-col gap-5">
          <CopyClipBoard
            icon={IconLink}
            label="Link para convidar"
            text={`${urlCurrent}/invite/${event.alias}`}
          />
          <CopyClipBoard
            icon={IconLink}
            label="Link adminstrador"
            text={`${urlCurrent}/event/admin/${event.id}`}
          />
          <CopyClipBoard
            icon={IconFingerprint}
            label="Senha Administrador"
            observation="Essa senha não sera exibida novamente, então guarde-a com cuidado"
            text={event.password ?? ''}
          />
        </div>
        <Qrcode event={event as Event} />
      </div>
    </Window>
  ) : null;
}
