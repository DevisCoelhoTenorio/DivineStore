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
import BurgerMenu from './BurgerMenu';
import { HeaderContext } from '../contexts';
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

export default function Header() {
  const { setSearch, setCategory } = React.useContext(HeaderContext);
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
  const getCategories = async () => {
    const response = await getAllCategory();
    setCategories([...response, { id: 'all' , name: 'Todas' } ]);
  };
  getCategories();
  }, []);

  const handleOnChange = (value) => {
    setSearch(value);
  }

  const handleClick = (category) => {
    setCategory(category);
  }

  return (
    <nav>
      <Box className="header">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div">
              <div className="logo">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1QasQHkXQwnUYo6xeGuQxBRNjVVVpkUG4"
                  alt="Vercel Logo"
                  width={50}
                  height={50}
                />
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
            <BurgerMenu categories={categories}/>
          </Toolbar>
      <div className="wide-categories-container">
      {categories.slice(0, 7).map((category) => (
      <button type="button" key={category.id * 10} onClick={() => handleClick(category.name)}>
        {category.name}
      </button>))}
      </div>
        </AppBar>
      </Box>
    </nav>
  );
}
