import { useState } from 'react';
import ALERT_TYPES from '../data/typesAlert';

const INITIAL_STATUS_ALERT = {
  type: '',
  message: '',
  status: false,
};

const useAlert = () => {
  const [alert, setAlert] = useState(INITIAL_STATUS_ALERT);

  const activeAlert = (key) => {
    const { type, message } = ALERT_TYPES[key];
    setAlert({ type, message, status: true });
    setTimeout(() => {
      setAlert(INITIAL_STATUS_ALERT);
    }, 5000);
  };

  return [alert, activeAlert];
};

export default useAlert;
