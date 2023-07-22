import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  user: {
    email: string;
    nameid: number;
    Guid: string;
    token: string;
  };
  children: React.ReactNode;
}

const ProtectedRoute = ({ user, children }: any) => {
  if (!user.token) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};
export default ProtectedRoute;
