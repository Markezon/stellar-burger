import { ReactNode } from 'react';

export type TModalUIProps = {
  title: string;
  onClose: () => void;
  titleStyle: string;
  children?: ReactNode;
};
