import React, { createContext } from 'react';
import Router from 'next/router';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import PropTypes from 'prop-types';
import { getToken, valideteAcess } from '../API';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [activeUser, setActiveUser] = React.useState(null);

  React.useEffect(() => {
    const checkLogin = async () => {
      const { 'divine.token': token } = parseCookies();
      if (token) {
        const payload = await valideteAcess(token);
        if (payload) setActiveUser(payload);
      }
    };
    checkLogin();
  }, []);

  async function signIn({ email, password }) {
    const { token, user } = await getToken({ email, password });
    if (token) {
      setCookie(undefined, 'divine.token', token, {
        maxAge: 60 * 60 * 1, // 1 hora
      });
      setActiveUser(user);
      Router.push('/admin');
      return true;
    }
    return false;
  }
  function logout() {
    destroyCookie(undefined, 'divine.token');
    setActiveUser(null);
    return Router.push('/catalog');
  }

  const value = React.useMemo(() => ({
    activeUser,
    signIn,
    logout,
  }));

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
