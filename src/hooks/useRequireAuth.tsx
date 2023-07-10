/* import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase-config';

const useRequireAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        // User is not authenticated, redirect to authentication page
        navigate('/authentication');
      }
    });

    return () => {
      unsubscribe(); // Cleanup the auth state listener
    };
  }, [navigate]);
};

export default useRequireAuth;
 */