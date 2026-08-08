import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useAuth();
  const location = useLocation();

  // If the user identity state context token is missing, redirect to the login screen
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If the role array rules fail to include the account token role, block entry
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/access-denied" replace />;
  }

  return <Outlet />;
};
