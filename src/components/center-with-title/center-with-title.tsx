import { FC, memo, useMemo } from 'react';

import { TCenter } from './type';
import { CenterUI } from '../ui/center-with-title';
import { useMatch } from 'react-router-dom';

export const Center: FC<TCenter> = memo(({ title, children }) => {
  const isFeedOrProfile = useMatch('/feed|profile');

  const titleStyle = useMemo(
    () =>
      isFeedOrProfile ? 'text_type_digits-default' : 'text_type_main-large',
    [isFeedOrProfile]
  );

  return (
    <>
      <CenterUI title={title} titleStyle={titleStyle} children={children} />
    </>
  );
});
