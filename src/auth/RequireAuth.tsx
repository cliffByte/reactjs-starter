import { useLocation, Navigate, Outlet } from "react-router-dom";

// auth hook
import useAuth from "../hooks/useAuth";

const isDevelopmentEnvironment =
  process.env.REACT_APP_ENVIRONMENT === "development";

const RequireAuth = ({ allowedRoles }: any) => {
  const { user } = useAuth();
  const location = useLocation();
  return isDevelopmentEnvironment ? (
    <Outlet />
  ) : allowedRoles?.includes(user?.role) && user?.token ? (
    <Outlet />
  ) : (
    // if user is not logged in then redirect to login page
    <Navigate to="" state={{ from: location }} replace />
  );
};

export default RequireAuth;
