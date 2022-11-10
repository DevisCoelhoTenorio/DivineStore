import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const TABLE_HEADERS = [{ name: 'Tamanho', align: '' }, { name: 'Quantidade', align: 'right' }, { name: 'Excluir', align: 'right' }];

export default function TableSize({ sizes, deleteSize }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {TABLE_HEADERS.map((headers) => (
              <TableCell key={headers.name} align={headers.align}>{headers.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {sizes.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right"><DeleteForeverIcon onClick={() => deleteSize(row.id)} /></TableCell>
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
