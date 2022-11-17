import PropTypes from 'prop-types';
import React from 'react';
import InventoryIcon from '@mui/icons-material/Inventory';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import GroupsIcon from '@mui/icons-material/Groups';
import StraightenIcon from '@mui/icons-material/Straighten';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SellIcon from '@mui/icons-material/Sell';

export const HeaderContext = React.createContext({
  category: '',
  setCategory: () => {},
  setSearch: () => {},
});

const BASE_MANAGEMENTS = [
  {
    code: 1,
    name: 'Produtos',
    active: true,
    path: '/admin/products',
    icon: InventoryIcon,
  },
  {
    code: 2,
    name: 'Banners',
    active: false,
    path: '/admin/banners',
    icon: ViewCarouselIcon,
  },
  {
    code: 3,
    name: 'Clientes',
    active: false,
    path: '/admin/clients',
    icon: GroupsIcon,
  },
  {
    code: 4,
    name: 'Tamanhos',
    active: false,
    path: '/admin/sizes',
    icon: StraightenIcon,
  },
  {
    code: 5, name: 'Vendas', active: false, path: '/admin/sales', icon: SellIcon,
  },
  {
    code: 6,
    name: 'Formas de Pagamento',
    active: false,
    path: '/admin/payment/methods',
    icon: MonetizationOnIcon,
  },
];

export function HeaderProvider({ children }) {
  const [category, setCategory] = React.useState('Todas');
  const [search, setSearch] = React.useState('');
  const [banner, setBanner] = React.useState([]);
  const [selectProductName, setSelectProductName] = React.useState('');
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
    selectProductName,
    setSelectProductName,
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
