import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';

const TABLE_HEADERS = [{ name: 'Tamanho' }, { name: 'Quantidade' }, { name: 'Excluir' }];

export default function TableSize({ sizes, deleteSize }) {
  return (
    <TableContainer className="table-size-container" component={Paper}>
      <Table sx={{ minWidth: 300 }} size="small" className="table-size" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {TABLE_HEADERS.map((headers) => (
              <TableCell key={headers.name} align="center">{headers.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {sizes.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="tr" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
              <TableCell align="center"><CloseIcon className="delete-icon-table" onClick={() => deleteSize(row.id)} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

TableSize.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    quantity: PropTypes.number,
  })).isRequired,
  deleteSize: PropTypes.func.isRequired,
};
