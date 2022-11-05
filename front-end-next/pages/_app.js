import '../styles/globals.css';
import '../styles/catalog.css';
import '../styles/header.css';
import '../styles/burgerMenu.css';
import '../styles/footer.css';
import '../styles/login.css';
import React from 'react';
import { HeaderProvider, AuthProvider } from '../contexts';

function MyApp({ Component, pageProps }) {
  return (
  <AuthProvider>
  <HeaderProvider>
    <Component {...pageProps} />
  </ HeaderProvider>
  </AuthProvider>
  );
};

export default MyApp;
