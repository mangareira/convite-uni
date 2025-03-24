import { ChangeEvent, InputHTMLAttributes } from 'react';

export default interface InputFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  description?: string;
  observation?: string;
  error?: string;
  outerclassname?: string;
}
