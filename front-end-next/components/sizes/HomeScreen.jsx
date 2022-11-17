import {
  Table,
  TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';
import * as React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';
import { getAllSizes } from '../../API';
import Loading from '../Loading';

const TABLE_HEADERS = ['ID', 'Tamanho', 'Editar'];

export default function HomeScreen() {
  const [sizesList, setSizesList] = React.useState(null);

  React.useEffect(() => {
    const findAllSizes = async () => {
      const result = await getAllSizes();
      setSizesList(result);
    };
    findAllSizes();
  }, []);
  return (
    <div>
      {sizesList ? (
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
              {sizesList.map((row) => (
                <TableRow
                  key={row.id}
                  className="table-row-admin"
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="tr" align="center" scope="row">{row.id}</TableCell>
                  <TableCell component="tr" align="center">{row.name}</TableCell>
                  <TableCell component="tr" align="center">
                    <EditIcon className="edit-icon" />
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
