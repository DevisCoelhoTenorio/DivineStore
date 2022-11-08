import PropTypes from 'prop-types';
import React from 'react';

export const HeaderContext = React.createContext({
  category: '',
  setCategory: () => {},
  setSearch: () => {},
});

const BASE_MANAGEMENTS = [
  {
    code: 1, name: 'Produtos', active: true, path: '/admin/products',
  },
  {
    code: 2, name: 'Banners', active: false, path: '/admin/products',
  },
  {
    code: 3, name: 'Clientes', active: false, path: '/admin/clients',
  },
  {
    code: 4, name: 'Tamanhos', active: false, path: '/admin/sizes',
  },
  {
    code: 5, name: 'Vendas', active: false, path: '/admin/sales',
  },
  {
    code: 6, name: 'Metodos de Pagamento', active: false, path: '/admin/paymentMethods',
  },
];

export function HeaderProvider({ children }) {
  const [category, setCategory] = React.useState('Todas');
  const [search, setSearch] = React.useState('');
  const [banner, setBanner] = React.useState([]);
  const [managements, setManagements] = React.useState(BASE_MANAGEMENTS);

  const selectManagement = (id) => {
    const setActive = managements.map((item) => {
      if (item.code === id) {
        return { ...item, active: true };
      }
      if (item.active) {
        return { ...item, active: false };
      }
      return item;
    });
    setManagements([...setActive]);
  };

  const value = React.useMemo(() => ({
    category,
    setCategory,
    search,
    setSearch,
    banner,
    setBanner,
    managements,
    setManagements,
    selectManagement,
  }));

  return (
    <HeaderContext.Provider value={value}>
      {children}
    </HeaderContext.Provider>
  );
}

HeaderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
