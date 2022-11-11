import * as React from 'react';
import Image from 'next/image';
// import { getAllCategory } from '../API';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import MeetingRoomSharpIcon from '@mui/icons-material/MeetingRoomSharp';
import Router from 'next/router';
import { nanoid } from 'nanoid';
import BurgerMenu from './BurgerMenu';
import { AuthContext, HeaderContext } from '../contexts';
import { getAllCategory } from '../API';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30vw',
      '&:focus': {
        width: '35vw',
      },
    },
  },
}));

export default function HeaderCatalog() {
  const { setSearch, setCategory } = React.useContext(HeaderContext);
  const { activeUser, logout } = React.useContext(AuthContext);
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    const getCategories = async () => {
      const response = await getAllCategory();
      setCategories([...response, { id: 'all', name: 'Todas' }]);
    };
    getCategories();
  }, []);

  const handleOnChange = (value) => {
    setSearch(value);
  };

  const handleClick = (category) => {
    setCategory(category);
  };

  return (
    <header className="main-header">
      <Box className="header">
        <AppBar position="static">
          <Toolbar className="search-bar-header">
            <Typography variant="h6" component="div">
              <div className="logo">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1QasQHkXQwnUYo6xeGuQxBRNjVVVpkUG4"
                  alt="Vercel Logo"
                  width={50}
                  height={50}
                />
                {activeUser?.admin ? (
                  <div>
                    <SettingsIcon className="catalog-admin-icon" onClick={() => Router.push('/admin')} />
                    <MeetingRoomSharpIcon className="catalog-admin-icon" onClick={() => logout()} />
                  </div>
                ) : null}
              </div>
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                onChange={(e) => handleOnChange(e.target.value)}
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <BurgerMenu categories={categories} />
          </Toolbar>
          <nav className="wide-categories-container">
            {categories.slice(0, 7).map((category) => (
              <button type="button" key={nanoid()} onClick={() => handleClick(category.name)}>
                <p>{category.name}</p>
                <hr />
              </button>
            ))}
          </nav>
        </AppBar>
      </Box>
    </header>
  );
}
