import * as React from 'react';
import { parseCookies } from 'nookies';
import HeaderAdmin from '../../../components/HeaderAdmin';
import { valideteAcess } from '../../../API';
import HomeScreen from '../../../components/products/HomeScreen';
import Footer from '../../../components/Footer';

export default function Products() {
  return (
    <section className="products-page">
      <HeaderAdmin text="Gerenciar Produtos" showManagement />
      <HomeScreen />
      <Footer />
    </section>
  );
}

export const getServerSideProps = async (ctx) => {
  const { 'divine.token': token } = parseCookies(ctx);

  const { admin } = await valideteAcess(token);
  if (!admin) {
    return {
      redirect: {
        destination: '/catalog',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
