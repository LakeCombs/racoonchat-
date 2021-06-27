import app from './firebase';
import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [authUser, setAuthUser] = useState();

  useEffect(() => {
    const unsubscribe = app.auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return unsubscribe;
  }, []);
  return authUser;
};
