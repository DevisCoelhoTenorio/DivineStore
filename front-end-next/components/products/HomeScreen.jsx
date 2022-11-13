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
import Image from 'next/image';
import {
  Alert,
  Button,
  Checkbox,
  ClickAwayListener,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText, DialogTitle, Fab, FormControlLabel, Grow, MenuItem, MenuList, Popper, Stack,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/router';
import { getAllProducts, getAllSizes, deleteProduct } from '../../API';
import Loading from '../Loading';
import useAlert from '../../hooks/useAlert';

const TABLE_HEADERS = [
  'ID', 'Imagem', 'Produto', 'Preço', 'Desconto', 'Categoria',
  'Tamanho', 'Quantidade', 'Registro', 'Editar/Apagar',
];

export default function HomeScreen() {
  const [products, setProducts] = React.useState(null);
  const [sizeList, setSizesList] = React.useState(null);
  const [selectedSize, setSelectedSize] = React.useState('Todos');
  const [openSizeOption, setOpenSizeOption] = React.useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [inStock, setInStock] = React.useState(false);
  const [alert, setAlert] = useAlert();
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
    getSizes();
    getProducts();
  }, []);

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
    setSelectedSize(size);
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
    if (inStock && getQtd(selectedSize, stock) === 0) return false;
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
          <Fab size="small" color="secondary" aria-label="add">
            <AddIcon onClick={() => Router.push('/admin/products/add')} />
          </Fab>
          <div className="filte-box">
            <FormControlLabel
              control={<Checkbox onClick={() => setInStock(!inStock)} />}
              label="Em Stock"
            />
          </div>
          <TableContainer className="table-products-admin" component={Paper}>
            <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  {TABLE_HEADERS.map((headers) => {
                    if (headers === 'Tamanho') {
                      return (
                        <div>
                          <Button
                            ref={anchorRef}
                            aria-controls={openSizeOption ? 'menu-list-grow' : undefined}
                            aria-haspopup="true"
                            onClick={handleToggleSizeOption}
                          >
                            {headers}
                          </Button>
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
                        </div>
                      );
                    }
                    return <TableCell key={headers} align="center">{headers}</TableCell>;
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((row) => {
                  if (verifyInStock(row.stock)) {
                    return (
                      <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">{row.id}</TableCell>
                        <TableCell align="center">
                          <Image
                            src={row.photos.img}
                            alt={row.name}
                            width={50}
                            height={50}
                          />
                        </TableCell>
                        <TableCell align="center">{row.name}</TableCell>
                        <TableCell align="center">{`R$ ${row.price.toFixed(2).replace('.', ',')}`}</TableCell>
                        <TableCell align="center">{`${row.promotion || 0}%`}</TableCell>
                        <TableCell align="center">{row.category.name}</TableCell>
                        <TableCell align="center">{selectedSize}</TableCell>
                        <TableCell align="center">{getQtd(selectedSize, row.stock)}</TableCell>
                        <TableCell align="center">{`${new Date(row.createdAt).toLocaleString()}`}</TableCell>
                        <TableCell align="center">
                          <DeleteForeverIcon onClick={() => handleClickOpenDeleteAlert(row)} />
                          <EditIcon onClick={() => Router.push(`/admin/products/edit/${row.id}`)} />
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
