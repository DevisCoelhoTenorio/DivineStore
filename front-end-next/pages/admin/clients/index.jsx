import { parseCookies } from 'nookies';
import * as React from 'react';
import { valideteAcess } from '../../../API';
import HomeScreen from '../../../components/clients/HomeScreen';
import Footer from '../../../components/Footer';
import HeaderAdmin from '../../../components/HeaderAdmin';

export default function Clients() {
  return (
    <div className="clients-page">
      <HeaderAdmin text="Gerenciar Clientes" showManagement />
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
