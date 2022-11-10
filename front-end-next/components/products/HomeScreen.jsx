import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// // import PropTypes from 'prop-types';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { getAllProducts } from '../../API';

const TABLE_HEADERS = [
  'ID', 'Imagem', 'Produto', 'Preço', 'Desconto', 'Categoria',
  'Tamanho', 'Quantidade', 'Registro',
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
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const getProducts = async () => {
      const response = await getAllProducts();
      const productsMap = response.map((product) => {
        const newStock = product.stock.map((item) => ({
          size: item.size.name,
          quantity: item.quantity,
        }));
        const newPhoto = product.photos.find((img) => img.thumbnail === true);
        const newProduct = {
          ...product,
          stock: newStock,
          photos: newPhoto,
        };
        return newProduct;
      });
      setProducts(productsMap);
    };
    getProducts();
  }, []);
  console.log(products);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {TABLE_HEADERS.map((headers) => (
              <TableCell align={headers.align}>{headers.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell
                align="right"
              >
                {/* <DeleteForeverIcon onClick={() => deleteSize(row.id)} /> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
