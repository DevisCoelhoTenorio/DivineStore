import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';
// // import PropTypes from 'prop-types';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Image from 'next/image';
import { getAllProducts, getAllSizes } from '../../API';
import Loading from '../Loading';

const TABLE_HEADERS = [
  'ID', 'Imagem', 'Produto', 'Preço', 'Desconto', 'Categoria',
  'Tamanho', 'Quantidade', 'Registro', 'Editar/Apagar',
];

// item = {
//   id: 1,
//   name: 'Vestido de noiva',
//   price: '600,45',
//   promotion: 10,
//   updatedAt: '2022-11-10T12:55:14.000Z',
//   createdAt: '2022-11-10T12:55:14.000Z',
//   category: {
//     name: 'Calca',
//   },
//   photos: [
//     {
//       img: 'https://drive.google.com/uc?export=view&id=1WECjLWrY9qVHqMiIKrvKGSWl-tSCwyRC',
//       thumbnail: true,
//     },
//     {
//       img: 'https://drive.google.com/uc?export=view&id=1fRTKB3lOcSqz-G3GsINZziSGxwVjIMoK',
//       thumbnail: false,
//     },
//   ],
//   stock: [
//     {
//       quantity: 0,
//       size: {
//         name: 'G',
//       },
//     },
//   ],
// };

export default function HomeScreen() {
  // const [headers, setHeaders] = React.useState([]);
  const [products, setProducts] = React.useState(null);
  const [sizeList, setSizesList] = React.useState(null);

  React.useEffect(() => {
    const getProducts = async () => {
      const response = await getAllProducts();
      const productsMap = response.map((product) => {
        const newStock = product.stock.map((item) => ({
          size: item.size.name,
          quantity: item.quantity,
        }));
        const newPrice = Number(product.price.replace(',', '.'));
        const newPhoto = product.photos.find((img) => img.thumbnail === true);
        const newProduct = {
          ...product,
          stock: newStock,
          photos: newPhoto,
          price: newPrice,
        };
        return newProduct;
      });
      setProducts(productsMap);
    };
    const getSizes = async () => {
      const response = await getAllSizes();
      setSizesList([{ id: 0, name: 'Todos' }, ...response]);
    };
    getSizes();
    getProducts();
  }, []);

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
  return (
    <div>
      {products ? (
        <TableContainer className="table-products-admin" component={Paper}>
          <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                {TABLE_HEADERS.map((headers) => (
                  <TableCell key={headers} align="center">{headers}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((row) => (
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
                  <TableCell align="center">{row.stock[0].size}</TableCell>
                  <TableCell align="center">{getQtd('P', row.stock)}</TableCell>
                  <TableCell align="center">{`${new Date(row.createdAt).toLocaleString()}`}</TableCell>
                  <TableCell align="center">
                    <DeleteForeverIcon />
                    <EditIcon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      ) : <Loading />}
    </div>
  );
}
