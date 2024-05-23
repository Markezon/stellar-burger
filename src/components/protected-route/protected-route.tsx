import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from '@store';
import { isAuthorizedSelector } from '@slices';

type ProtectedRouteProps = {
  forAuthorized: boolean;
};

export const ProtectedRoute = ({
  forAuthorized = false
}: ProtectedRouteProps) => {
  const location = useLocation();
  const isAuthorized = useSelector(isAuthorizedSelector);
  const from = location.state?.from || '/';

  if (!forAuthorized && isAuthorized) {
    return <Navigate to={from} />;
  }

  if (forAuthorized && !isAuthorized) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  return <Outlet />;
};
