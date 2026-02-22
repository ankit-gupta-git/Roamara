import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { token, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-500"></div>
      </div>
    );
  }

  return token ? children : <Navigate to="/login" />; // Or redirect to specific login page if preferred, or trigger modal
};

export default PrivateRoute;