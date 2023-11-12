import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ auth, children }) => {
  if (auth) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
