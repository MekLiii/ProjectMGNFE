import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const state = useSelector((state: any) => state.auth);
  console.log(state.token);
  if (state.token === null) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
