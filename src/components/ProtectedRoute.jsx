import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  // If no user is logged in, send them to login page
  return currentUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;