import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token")?true:false;
  console.log(isAuthenticated,localStorage.getItem("token"),"isAuthenticated")

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
