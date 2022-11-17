import * as React from 'react';
import {
  Table,
  TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Loading from '../Loading';
import { getAllOrders } from '../../API';

const TABLE_HEADERS = ['ID', 'Cliente', 'Valor', 'Forma de Pagamento', 'Qtd. Parcelas', 'Registro', 'Excluir/Editar'];

export default function HomeScreen() {
  const [orderList, setOrderList] = React.useState(null);

  React.useEffect(() => {
    const findAllOrders = async () => {
      const result = await getAllOrders();
      setOrderList(result);
    };
    findAllOrders();
  }, []);
  return (
    <div>
      {orderList ? (
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
              {orderList.map((row) => (
                <TableRow
                  key={row.id}
                  className="table-row-admin"
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="tr" align="center" scope="row">{row.id}</TableCell>
                  <TableCell component="tr" align="center">{row.client.name}</TableCell>
                  <TableCell component="tr" align="center">{`R$ ${row.price}`}</TableCell>
                  <TableCell component="tr" align="center">{row.paymentMethod}</TableCell>
                  <TableCell component="tr" align="center">{row.installments}</TableCell>
                  <TableCell component="tr" align="center">{row.createdAt}</TableCell>
                  <TableCell component="tr" align="center">
                    <EditIcon className="edit-icon" />
                    <DeleteForeverIcon className="delete-icon-table" />
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
