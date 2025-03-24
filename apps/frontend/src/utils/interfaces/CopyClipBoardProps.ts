import { ElementType, ForwardRefExoticComponent, RefAttributes } from 'react';

import { Icon, IconProps } from '@tabler/icons-react';

export type CopyClipBoardProps = {
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  label: string;
  text: string;
  observation?: string;
};
