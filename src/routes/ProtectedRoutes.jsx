import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ login, children }) => {
  if (login) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
