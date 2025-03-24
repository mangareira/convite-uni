import { FormGuestProps } from '@/utils/interfaces/formGuestsProps';
import InputField from '../shared/InputField';
import YesOrNoField from '../shared/YesOrNoField';

export default function FormGuest(props: FormGuestProps) {
  return (
    <div className="flex flex-col gap-5">
      <InputField
        label="Nome"
        value={props.guest.name ?? ''}
        onChange={(e) =>
          props.alterGuest({ ...props.guest, name: e.target.value })
        }
      />
      <InputField
        label="Email"
        type="email"
        value={props.guest.email ?? ''}
        onChange={(e) =>
          props.alterGuest({ ...props.guest, email: e.target.value })
        }
      />
      <div className="flex gap-5">
        <YesOrNoField
          className="flex-1"
          label="Presença Confirmada"
          value={props.guest.confirmed ?? true}
          onChange={(value) =>
            props.alterGuest({ ...props.guest, confirmed: value })
          }
        />
        {props.guest.confirmed && (
          <div className="flex-1 flex gap-5">
            <YesOrNoField
              className="flex-1"
              label="Possuiu Acompanhantes ?"
              value={props.guest.hasCompanions ?? false}
              onChange={(value) =>
                props.alterGuest({
                  ...props.guest,
                  hasCompanions: value,
                  qtdCompanion: value ? 1 : 0,
                })
              }
            />
            {props.guest.hasCompanions && (
              <InputField
                label="Quantos Acompanhantes ?"
                min={1}
                type="number"
                value={props.guest.qtdCompanion ?? 1}
                onChange={(e) => {
                  props.alterGuest({
                    ...props.guest,
                    qtdCompanion: +e.target.value,
                  });
                }}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
