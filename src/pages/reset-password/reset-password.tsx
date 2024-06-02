import { FC, SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ResetPasswordUI } from '@ui-pages';

import { useSelector, useDispatch } from '@store';
import {
  resetPasswordThunk,
  getUserErrorSelector,
  clearUserError
} from '@slices';

export const ResetPassword: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const error = useSelector(getUserErrorSelector) as string;

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(resetPasswordThunk({ password: password, token: token })).then(
      (data) => {
        if (data.payload) {
          localStorage.removeItem('resetPassword');
          navigate('/login');
        }
      }
    );
  };

  useEffect(() => {
    dispatch(clearUserError());
  }, [dispatch]);

  useEffect(() => {
    if (!localStorage.getItem('resetPassword')) {
      navigate('/forgot-password', { replace: true });
    }
  }, [navigate]);

  return (
    <ResetPasswordUI
      errorText={error}
      password={password}
      token={token}
      setPassword={setPassword}
      setToken={setToken}
      handleSubmit={handleSubmit}
    />
  );
};
