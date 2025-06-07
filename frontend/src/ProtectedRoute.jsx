import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isLoggedIn = !!localStorage.getItem('token'); // Adjust as per your auth logic
  const location = useLocation();

  if (!isLoggedIn) {
    // Save the path to redirect after login
    return <Navigate to={`/login?redirect=${encodeURIComponent(location.pathname)}`} replace />;
  }
  return children;
}

export default ProtectedRoute;