import * as React from 'react';
import { parseCookies } from 'nookies';
import HeaderAdmin from '../../../components/HeaderAdmin';
import ManagerForm from '../../../components/products/ManagerForm';
import {
  valideteAcess, createNewProduct,
} from '../../../API';

export default function Products() {
  const INITIAL_STATE = {
    name: '',
    price: '',
    description: '',
    category: '',
    promotion: 0,
    imgsList: [],
    sizesItemList: [],
  };
  return (
    <section className="products-page">
      <HeaderAdmin text="Adicionar Produto" showManagement />
      <ManagerForm initialState={INITIAL_STATE} submitFunc={createNewProduct} type="Add" />
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
