import { Navigate, useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { useState } from "react"; // Import useState hook to handle initial state loading

interface ProtectedRouteProps {
  user: {
    email: string;
    nameid: number;
    Guid: string;
    token: string;
  };
  children: React.ReactNode;
}

const ProtectedRoute = ({ user, children }: ProtectedRouteProps) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true); // State to handle initial loading

  // if (isLoading) {
  //   return <div>Loading</div>;
  // }
  if (!user.token) {
    return <Navigate to="/" />;
  }
 
  return <>{children}</>;
};

export default ProtectedRoute;
