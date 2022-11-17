import * as React from 'react';
import { parseCookies } from 'nookies';
import HeaderAdmin from '../../../components/HeaderAdmin';
import Footer from '../../../components/Footer';
import HomeScreen from '../../../components/sales/HomeScreen';
import { valideteAcess } from '../../../API';

export default function Sales() {
  return (
    <div>
      <HeaderAdmin text="Gerenciar Vendas" showManagement />
      <HomeScreen />
      <Footer />
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const { 'divine.token': token } = parseCookies(ctx);

  const { admin } = await valideteAcess(token);
  if (!admin) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
