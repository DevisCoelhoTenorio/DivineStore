import * as React from 'react';
import {
  MenuItem,
  Select,
  Table,
  TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';
import Chart from 'react-google-charts';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { getAllOrders } from '../../API';
import Loading from '../Loading';
import useYearChart from '../../hooks/useYearChart';

const TABLE_HEADERS = ['ID', 'Cliente', 'Valor', 'Forma de Pagamento', 'Qtd. Parcelas', 'Registro', 'Excluir/Editar'];

export default function HomeScreen() {
  const [orderList, setOrderList] = React.useState(null);
  const [yearOrder, setYearOrder] = React.useState('2022');
  const [yearlyOrders, getYearlyOrders, yearOptions] = useYearChart();

  React.useEffect(() => {
    const findAllOrders = async () => {
      const result = await getAllOrders();
      setOrderList(result);
      getYearlyOrders(result);
    };
    findAllOrders();
  }, []);
  return (
    <div className="sales-page">
      {orderList ? (
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
          <div className="chart-container">
            <div className="title-container">
              <h2>Vendas do Ano</h2>
              <Select
                sx={{ border: '1px solid #802785', '&:focus': { outline: 'none', border: '1px solid #802785' } }}
                className="select-year"
                value={yearOrder}
                onChange={(e) => {
                  setYearOrder(e.target.value);
                  getYearlyOrders(orderList, Number(e.target.value));
                }}
              >
                {yearOptions.map((year) => (
                  <MenuItem value={year}>{year}</MenuItem>
                ))}
              </Select>
            </div>
            <Chart
              chartType="ColumnChart"
              loader={<Loading />}
              options={{
                is3D: true,
                colors: ['#984C9C'],
                backgroundColor: 'transparent',
                hAxis: { title: 'Mês' },
                vAxis: { title: 'Faturamento (R$)' },
                legend: 'none',
              }}
              width="100%"
              height="400px"
              data={[['Mês', 'Valor', { role: 'annotation' }], ...yearlyOrders]}
            />
          </div>
        </div>
      ) : <Loading />}
    </div>
  );
}
