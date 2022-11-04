import '../styles/globals.css';
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
