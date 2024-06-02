import { FC, useState, SyntheticEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/* import { forgotPasswordApi } from '@api'; */
import { ForgotPasswordUI } from '@ui-pages';

import { useSelector, useDispatch } from '@store';
import {
  forgotPasswordThunk,
  getUserErrorSelector,
  clearUserError
} from '@slices';

export const ForgotPassword: FC = () => {
  const [email, setEmail] = useState('');
  const error = useSelector(getUserErrorSelector) as string;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearUserError());
  });

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    dispatch(forgotPasswordThunk({ email: email })).then((data) => {
      if (data.payload) {
        localStorage.setItem('resetPassword', 'true');
        navigate('/reset-password', { replace: true });
      }
    });
  };

  return (
    <ForgotPasswordUI
      errorText={error}
      email={email}
      setEmail={setEmail}
      handleSubmit={handleSubmit}
    />
  );
};
