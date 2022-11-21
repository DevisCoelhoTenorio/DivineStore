import { useEffect, useState } from 'react';

const months = [
  ['Janeiro', 0], ['Fevereiro', 0], ['Marco', 0],
  ['Abril', 0], ['Maio', 0], ['Junho', 0],
  ['Julho', 0], ['Agosto', 0], ['Setembro', 0],
  ['Outubro', 0], ['Novembro', 0], ['Dezembro', 0],
];

const useYearChart = () => {
  const [yearlyOrders, setYearlyOrders] = useState(months);
  const [yearOptions, setYearOptions] = useState([]);

  const getYearlyOrders = (orders = [], year = new Date().getFullYear()) => {
    const createDates = orders.map((dateOrder) => ({
      ...dateOrder,
      createdAt: new Date(dateOrder.createdAt),
    }));

    const values = createDates.filter((order) => {
      if (order.createdAt.getFullYear() <= year && order.createdAt.getFullYear() > year - 1) {
        return order;
      }
      return false;
    });

    const yearMap = yearlyOrders.map((month, index) => {
      const monthOrders = values.filter((order) => order.createdAt.getMonth() === index);
      let total = 0;
      monthOrders.forEach((order) => {
        total += Number(order.price);
      });
      return [month[0], total, `${total.toFixed(2).replace('.', ',')}`];
    });

    setYearlyOrders(yearMap);
  };

  useEffect(() => {
    const getYearOptions = () => {
      const currentYear = new Date(Date.now()).getFullYear();
      const years = [];
      for (let previousYear = currentYear; previousYear >= 2021; previousYear -= 1) {
        years.push(previousYear);
      }
      setYearOptions(years);
    };
    getYearOptions();
  }, []);

  return [yearlyOrders, getYearlyOrders, yearOptions];
};

export default useYearChart;
