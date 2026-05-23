

import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  if (!location.state?.fromLogin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;


