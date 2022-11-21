import * as React from 'react';
import { parseCookies } from 'nookies';
import HeaderAdmin from '../../../components/HeaderAdmin';
import Footer from '../../../components/Footer';
import HomeScreen from '../../../components/sizes/HomeScreen';
import { valideteAcess } from '../../../API';

export default function Sizes() {
  return (
    <div className="sizes-page">
      <HeaderAdmin text="Gerenciar Tamanhos" showManagement />
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
