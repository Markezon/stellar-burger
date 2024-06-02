import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from '@store';
import { Preloader } from '../ui/preloader';
import { isAuthorizedSelector, getRequestUser } from '@slices';

type ProtectedRouteProps = {
  forAuthorized: boolean;
};

export const ProtectedRoute = ({
  forAuthorized = false
}: ProtectedRouteProps) => {
  const location = useLocation();
  const isAuthorized = useSelector(isAuthorizedSelector);
  const request = useSelector(getRequestUser);
  const from = location.state?.from || '/';

  if (request) {
    return <Preloader />;
  }

  if (!forAuthorized && isAuthorized) {
    return <Navigate to={from} />;
  }

  if (forAuthorized && !isAuthorized) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  return <Outlet />;
};
