/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import '../styles/catalog.css';
import '../styles/header.css';
import '../styles/burgerMenu.css';
import '../styles/footer.css';
import '../styles/login.css';
import '../styles/admin.css';
import '../styles/products.css';
import '../styles/details.css';
import '../styles/sales.css';
import '../styles/banners.css';
import '../styles/clients.css';
import '../styles/sizes.css';
import '../styles/paymentMethods.css';
import React from 'react';
import { HeaderProvider, AuthProvider } from '../contexts';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <HeaderProvider>
        <Component {...pageProps} />
      </HeaderProvider>
    </AuthProvider>
  );
}

export default MyApp;
