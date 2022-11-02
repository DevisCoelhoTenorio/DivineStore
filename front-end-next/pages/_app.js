import '../styles/globals.css';
import React from 'react';
import PropTypes from 'prop-types';
import Category from '../contexts';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Category.Provider>
      <Component {...pageProps} />
    </Category.Provider>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.shape({}),
};

MyApp.defaultProps = {
  pageProps: {},
};
