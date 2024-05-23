import { FC, memo } from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { TCenter } from './type';
import { CenterUI } from '../ui/center-with-title';

export const Center: FC<TCenter> = memo(({ title, children }) => {
  const location = useLocation();
  const [titleStyle, setTitleStyle] = useState('text_type_main-large');

  useEffect(() => {
    if (/feed|profile/i.test(location.pathname)) {
      setTitleStyle('text_type_digits-default');
    }
  });

  return (
    <>
      <CenterUI title={title} titleStyle={titleStyle} children={children} />
    </>
  );
});
