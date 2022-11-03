import PropTypes from 'prop-types';
import React from 'react';

const Context = React.createContext({
  category: '',
  setCategory: () => {},
  setSearch: () => {},
});

function Provider({ children }) {
  const [category, setCategory] = React.useState('Todas');
  const [search, setSearch] = React.useState('');

  const value = React.useMemo(() => ({ category, setCategory, search, setSearch }));

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
