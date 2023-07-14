 import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';

const useRequireAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        // User is not authenticated, redirect to authentication page
        navigate('/authentication');
        alert('You are Not Signed-In , Please Sign-In...')
      }
    });

    return () => {
      unsubscribe(); // Cleanup the auth state listener
    };
  }, [navigate]);
};

export default useRequireAuth;
 