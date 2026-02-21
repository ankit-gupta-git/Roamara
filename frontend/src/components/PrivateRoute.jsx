import { Navigate } from 'react-router-dom';
import { useUser } from "@clerk/clerk-react";

const PrivateRoute = ({ children }) => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-500"></div>
      </div>
    );
  }

  return isSignedIn ? children : <Navigate to="/" />; // Or redirect to specific login page if preferred, or trigger modal
};

export default PrivateRoute;