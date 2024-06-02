import { FC } from 'react';
import { AppHeaderUI } from '@ui';
import { useSelector } from '@store';
import { getUserSelector } from '@slices';

export const AppHeader: FC = () => {
  const userName = useSelector(getUserSelector)?.name;
  return <AppHeaderUI userName={userName} />;
};
