import PropTypes from 'prop-types';
import React from 'react';

const Context = React.createContext();

function Provider({ children }) {
  const [category, setCategory] = React.useState('');

  const value = React.useMemo(() => ({ category, setCategory }));

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

export default {
  Context,
  Provider,
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
