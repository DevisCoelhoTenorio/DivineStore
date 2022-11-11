import * as React from 'react';
import { parseCookies } from 'nookies';
import HeaderAdmin from '../../../components/HeaderAdmin';
import ManagerForm from '../../../components/products/ManagerForm';
import { valideteAcess } from '../../../API';
import HomeScreen from '../../../components/products/HomeScreen';

export default function Products() {
  const [typeRender, setTypeRender] = React.useState(null);

  // const setStateRender = (type) => {
  //   setTypeRender(type);
  // };

  return (
    <section className="products-page">
      <HeaderAdmin text="Gerenciar Produtos" showManagement />
      {!typeRender ? (
        <HomeScreen setTypeRender={setTypeRender} />
      ) : null }
      {typeRender ? <ManagerForm /> : null }
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
