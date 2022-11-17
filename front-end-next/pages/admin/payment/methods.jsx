import * as React from 'react';
import { parseCookies } from 'nookies';
import HeaderAdmin from '../../../components/HeaderAdmin';
import Footer from '../../../components/Footer';
import HomeScreen from '../../../components/paymentMethods/HomeScreen';
import { valideteAcess } from '../../../API';

export default function Methods() {
  return (
    <div>
      <HeaderAdmin text="Gerenciar Formas de Pagamento" showManagement />
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
