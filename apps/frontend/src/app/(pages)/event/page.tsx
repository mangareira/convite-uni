'use client';

import FormEvent from '@/components/events/FormEvent';
import Window from '@/components/shared/Window';
import useEvent from '@/data/hooks/useEvent';

export default function Event() {
  const { event } = useEvent();

  return (
    <div className="">
      <Window
        background={event.imageBackground}
        image={event.image}
        label="Qual evento vamos criar"
        title={event.name ? event.name : 'Novo evento'}
      >
        <FormEvent />
      </Window>
    </div>
  );
}
