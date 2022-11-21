import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';
import { getAllClients } from '../../API';
import Loading from '../Loading';

const TABLE_HEADERS = ['ID', 'Nome', 'Email', 'Telefone', 'Cadastro', 'Editar'];

export default function HomeScreen() {
  const [clientList, setClientList] = React.useState(null);

  React.useEffect(() => {
    const findAllClients = async () => {
      const result = await getAllClients();
      setClientList(result);
    };
    findAllClients();
  }, []);
  return (
    <div>
      {clientList ? (
        <div>
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
                {clientList.map((row) => (
                  <TableRow
                    key={row.id}
                    className="table-row-admin"
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="tr" align="center" scope="row">{row.id}</TableCell>
                    <TableCell component="tr" align="center">{row.name}</TableCell>
                    <TableCell component="tr" align="center">{row.email}</TableCell>
                    <TableCell component="tr" align="center">
                      <Link
                        target="_blank"
                        href={`https://wa.me/55${row.phoneNumber}?`}
                        className="contact-detail-link"
                      >
                        <p>{row.phoneNumber}</p>
                        <WhatsAppIcon className="client-whats-app-icon" />
                      </Link>
                    </TableCell>
                    <TableCell component="tr" align="center">{`${new Date(row.createdAt).toLocaleString()}`}</TableCell>
                    <TableCell component="tr" align="center">
                      <EditIcon className="edit-icon" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ) : <Loading />}
    </div>
  );
}
