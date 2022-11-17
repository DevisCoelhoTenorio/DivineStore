import {
  Table,
  TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Paper from '@mui/material/Paper';
import { getAllBanners } from '../../API';
import Loading from '../Loading';

const TABLE_HEADERS = ['ID', 'Banner', 'Nome', 'Registro', 'Editar/Apagar'];

export default function HomeScreen() {
  const [bannerList, setBannerList] = React.useState(null);

  React.useEffect(() => {
    const findAllBanners = async () => {
      const result = await getAllBanners();
      setBannerList(result);
    };
    findAllBanners();
  }, []);
  return (
    <div>
      {bannerList ? (
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
              {bannerList.map((row) => (
                <TableRow
                  key={row.id}
                  className="table-row-admin"
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="tr" align="center" scope="row">{row.id}</TableCell>
                  <TableCell component="tr" align="center">
                    <Image
                      src={row.img}
                      alt={row.name}
                      width={120}
                      height={50}
                    />
                  </TableCell>
                  <TableCell component="tr" align="center">{row.name}</TableCell>
                  <TableCell component="tr" align="center">{`${new Date(row.createdAt).toLocaleString()}`}</TableCell>
                  <TableCell component="tr" align="center">
                    <DeleteForeverIcon className="delete-icon-table" />
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
