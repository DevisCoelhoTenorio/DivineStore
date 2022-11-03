import '../styles/globals.css';
import React from 'react';
import Header from '../contexts';

function MyApp({ Component, pageProps }) {
  return (
  <Header.Provider>
    <Component {...pageProps} />
  </ Header.Provider>
  );
};

export default MyApp;
