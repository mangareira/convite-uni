import Event from '../model/Event';

export default function validateEvent(event: Partial<Event>): string[] {
  const errors: string[] = [];

  if (!event.alias) errors.push('Alias obrigatório');
  if (!event.name) errors.push('Nome obrigatório');
  if (!event.description) errors.push('Descrição obrigatória');
  if (!event.date) errors.push('Data obrigatória');
  if (!event.local) errors.push('Local obrigatório');
  if (!event.expectedAudience || event.expectedAudience < 1)
    errors.push('Publico esperado é obrigatória');
  if (!event.image) errors.push('Imagem é obrigatório');
  if (!event.imageBackground) errors.push('Imagem de fundo é obrigatório');

  return errors;
}
