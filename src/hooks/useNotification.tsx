import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export const useNotification = () => {
  const [notification, setNotification] = useState<string | null>(null);

  const notify = (message: string) => {
    setNotification(message);
    toast.success(message, {
      position: 'top-center',
      style: {
        zIndex: '900',
        background: '#333',
        color: '#fff',
        boxShadow: '0 0 2px rgba(0, 0, 0, 0.1)',
      },
    });
  };

  return {
    notification,
    notify,
  };
};
