import * as React from 'react';
import { parseCookies } from 'nookies';
import { useRouter } from 'next/router';
import HeaderAdmin from '../../../../components/HeaderAdmin';
import ManagerForm from '../../../../components/products/ManagerForm';
import {
  valideteAcess, updateProduct, getProductById,
} from '../../../../API';
import { formatterForInitalEditState } from '../../../../Services/formatters';

export default function Products() {
  const [initialState, setInitialState] = React.useState(null);
  const { query } = useRouter();

  React.useEffect(() => {
    const getProduct = async () => {
      const { id } = query;
      const result = await getProductById(id);
      const product = formatterForInitalEditState(result);
      setInitialState(product);
    };
    getProduct();
  }, []);

  const editProduct = async (productInfo) => {
    const { id } = query;
    const result = await updateProduct(id, productInfo);
    return result;
  };

  return (
    <section className="products-page">
      <HeaderAdmin text="Editar Produto" showManagement />
      {initialState ? (
        <ManagerForm initialState={initialState} submitFunc={editProduct} type="Update" />
      ) : null}
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
