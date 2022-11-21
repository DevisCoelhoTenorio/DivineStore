import * as React from 'react';
import { parseCookies } from 'nookies';
import HeaderAdmin from '../../../components/HeaderAdmin';
import Footer from '../../../components/Footer';
import HomeScreen from '../../../components/banners/HomeScreen';
import { valideteAcess } from '../../../API';

export default function Banners() {
  return (
    <div className="banners-page">
      <HeaderAdmin text="Gerenciar Banners" showManagement />
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
