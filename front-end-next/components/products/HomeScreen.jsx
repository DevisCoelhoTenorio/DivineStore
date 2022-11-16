import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Image from 'next/image';
import {
  Alert,
  Button,
  ClickAwayListener,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab, Grow, MenuItem, MenuList, Popper, Stack, TextField,
} from '@mui/material';
import InputBase from '@mui/material/InputBase';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/router';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import Link from 'next/link';
import {
  getAllProducts, getAllSizes, deleteProduct, getAllCategory,
} from '../../API';
import Loading from '../Loading';
import useAlert from '../../hooks/useAlert';

const TABLE_HEADERS = [
  'ID', 'Imagem', 'Produto', 'Preço', 'Desconto', 'Categoria',
  'Tamanho', 'Quantidade', 'Registro', 'Editar/Apagar',
];

const STOCK_OPTION = ['Com', 'Sem', 'Todos'];

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

export default function HomeScreen() {
  const [products, setProducts] = React.useState(null);
  const [sizeList, setSizesList] = React.useState(null);
  const [selectedSize, setSelectedSize] = React.useState('Todos');
  const [openSizeOption, setOpenSizeOption] = React.useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [inStock, setInStock] = React.useState('Todos');
  const [searchName, setSearchName] = React.useState('');
  const [alert, setAlert] = useAlert();
  const [selectedCategory, setSelectedCategory] = React.useState('Todas');
  const [categoriesList, setCategoriesList] = React.useState(null);
  const anchorRef = React.useRef(null);
  const Router = useRouter();

  React.useEffect(() => {
    const getProducts = async () => {
      const response = await getAllProducts();
      setProducts(response);
    };

    const getSizes = async () => {
      const response = await getAllSizes();
      setSizesList([{ id: 0, name: 'Todos' }, ...response]);
    };

    const getCategories = async () => {
      const response = await getAllCategory();
      setCategoriesList([{ id: 0, name: 'Todas' }, ...response]);
    };

    getSizes();
    getProducts();
    getCategories();
  }, []);

  const productsRenderList = products ? products
    .filter((item) => item.name.toLowerCase().includes(searchName.toLowerCase()))
    .filter((item2) => (selectedCategory !== 'Todas' ? item2.category.name === selectedCategory : true)) : [];

  // Show Alert Delete Product
  const handleClickOpenDeleteAlert = (product) => {
    setSelectedProduct(product);
    setOpenDeleteAlert(true);
  };

  const handleCloseDeleteAlert = () => {
    setOpenDeleteAlert(false);
  };

  const acceptdeleteProduct = async () => {
    const result = await deleteProduct(selectedProduct.id);
    if (!result) {
      global.alert('deu merda');
    }
    const response = await getAllProducts();
    setProducts(response);
    setOpenDeleteAlert(false);
    setAlert('deletedProductSuccess');
  };

  // Toggle Size Menu Grow
  const handleToggleSizeOption = () => {
    setOpenSizeOption((prevOpen) => !prevOpen);
  };

  const handleCloseSizeOption = (event, size) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setSelectedSize(size || 'Todas');
    setOpenSizeOption(false);
  };

  const handleListKeyDownSizeOption = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpenSizeOption(false);
    }
  };

  const prevOpen = React.useRef(openSizeOption);
  React.useEffect(() => {
    if (prevOpen.current === true && openSizeOption === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = openSizeOption;
  }, [openSizeOption]);

  // Calc. Quantidade de tamanhos
  const getQtd = (name, stock) => {
    let qtdValue;
    if (name === 'Todos') {
      qtdValue = stock.reduce((acc, curr) => {
        const value = acc + curr.quantity;
        return value;
      }, 0);
      return qtdValue;
    }
    qtdValue = stock.find((item) => item.size === name);
    return qtdValue?.quantity || 0;
  };
  const verifyInStock = (stock) => {
    if (inStock === STOCK_OPTION[0] && getQtd(selectedSize, stock) === 0) return false;
    if (inStock === STOCK_OPTION[1] && getQtd(selectedSize, stock) !== 0) return false;
    return true;
  };

  return (
    <div>
      {
        alert.status ? (
          <Stack className="alert" sx={{ width: '100%' }} spacing={2}>
            <Alert severity={alert.type}>{alert.message}</Alert>
          </Stack>
        ) : null
      }
      {selectedProduct ? (
        <Dialog
          open={openDeleteAlert}
          onClose={handleCloseDeleteAlert}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Tem certeza que deseja apagar PERMANETEMENTE o produto abaixo?
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {`ID: ${selectedProduct.id} - ${selectedProduct.name}`}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDeleteAlert}>Não</Button>
            <Button onClick={acceptdeleteProduct} autoFocus>
              Sim
            </Button>
          </DialogActions>
        </Dialog>
      ) : null}
      {products ? (
        <div>
          <Fab size="small" className="add-product-icon" color="secondary" aria-label="add">
            <AddIcon onClick={() => Router.push('/admin/products/add')} />
          </Fab>
          <div className="filter-box">
            <div className="category-filter">
              <TextField
                id="category"
                name="category"
                select
                className="category-selection"
                label="Estoque"
                value={inStock}
                onChange={(e) => setInStock(e.target.value)}
              >
                {STOCK_OPTION.map((option) => (
                  <MenuItem
                    key={option}
                    value={option}
                  >
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="category"
                name="category"
                select
                className="category-selection"
                label="Categoria"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categoriesList ? categoriesList.map((category) => (
                  <MenuItem
                    key={category.id}
                    value={category.name}
                  >
                    {category.name}
                  </MenuItem>
                )) : null}
              </TextField>
            </div>
            <Search className="search-bar-admin">
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                onChange={(e) => setSearchName(e.target.value)}
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </div>
          <TableContainer className="table-products-admin" component={Paper}>
            <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  {TABLE_HEADERS.map((headers) => {
                    if (headers === 'Tamanho') {
                      return (
                        <TableCell key={`${headers}`} align="center" className="size-th">
                          {headers}
                          <ArrowDropDownIcon
                            className="drop-down"
                            ref={anchorRef}
                            aria-controls={openSizeOption ? 'menu-list-grow' : undefined}
                            aria-haspopup="true"
                            onClick={handleToggleSizeOption}
                          />
                          <Popper
                            open={openSizeOption}
                            anchorEl={anchorRef.current}
                            role={undefined}
                            transition
                            disablePortal
                          >
                            {({ TransitionProps, placement }) => (
                              <Grow
                              // eslint-disable-next-line react/jsx-props-no-spreading
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                              >
                                <Paper>
                                  <ClickAwayListener onClickAway={handleCloseSizeOption}>
                                    <MenuList autoFocusItem={openSizeOption} id="menu-list-grow" onKeyDown={handleListKeyDownSizeOption}>
                                      {sizeList.map((item) => (
                                        <MenuItem
                                          onClick={(e) => handleCloseSizeOption(e, item.name)}
                                        >
                                          {item.name}
                                        </MenuItem>
                                      ))}
                                    </MenuList>
                                  </ClickAwayListener>
                                </Paper>
                              </Grow>
                            )}
                          </Popper>
                        </TableCell>
                      );
                    }
                    return <TableCell key={headers} align="center">{headers}</TableCell>;
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {productsRenderList.map((row) => {
                  if (verifyInStock(row.stock)) {
                    return (
                      <TableRow
                        key={row.id}
                        className="table-row-admin"
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="tr" align="center" scope="row">{row.id}</TableCell>
                        <TableCell component="tr" align="center">
                          <Image
                            src={row.photos.img}
                            alt={row.name}
                            width={50}
                            height={50}
                          />
                        </TableCell>
                        <Link href={`/catalog/${row.id}`}>
                          <TableCell component="tr" align="center">{row.name}</TableCell>
                        </Link>
                        <TableCell component="tr" align="center">{`R$ ${row.price.replace('.', ',')}`}</TableCell>
                        <TableCell component="tr" align="center">{`${row.promotion || 0}%`}</TableCell>
                        <TableCell component="tr" align="center">{row.category.name}</TableCell>
                        <TableCell component="tr" align="center">{selectedSize}</TableCell>
                        <TableCell component="tr" align="center">{getQtd(selectedSize, row.stock)}</TableCell>
                        <TableCell component="tr" align="center">{`${new Date(row.createdAt).toLocaleString()}`}</TableCell>
                        <TableCell component="tr" align="center">
                          <DeleteForeverIcon className="delete-icon-table" onClick={() => handleClickOpenDeleteAlert(row)} />
                          <EditIcon className="edit-icon" onClick={() => Router.push(`/admin/products/edit/${row.id}`)} />
                        </TableCell>
                      </TableRow>
                    );
                  }
                  return null;
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ) : <Loading />}
    </div>
  );
}
