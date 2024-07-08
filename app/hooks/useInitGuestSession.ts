import { useEffect } from 'react';
import { useFilmStore } from '../store/movieStore';

export const useInitGuestSession = () => {
  const { initGuestSession, guestSessionId } = useFilmStore();

  useEffect(() => {
    if (!guestSessionId) {
      initGuestSession();
    }
  }, []);

  return guestSessionId;
};