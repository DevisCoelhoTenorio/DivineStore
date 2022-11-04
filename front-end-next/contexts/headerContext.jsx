import PropTypes from 'prop-types';
import React from 'react';

export const HeaderContext = React.createContext({
  category: '',
  setCategory: () => {},
  setSearch: () => {},
});

export function HeaderProvider({ children }) {
  const [category, setCategory] = React.useState('Todas');
  const [search, setSearch] = React.useState('');

  const value = React.useMemo(() => ({ category, setCategory, search, setSearch }));

  return (
    <HeaderContext.Provider value={value}>
      {children}
    </HeaderContext.Provider>
  );
}

HeaderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
