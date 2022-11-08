import * as React from 'react';
import { parseCookies } from 'nookies';
import OptionsManagement from '../../components/OptionsManagement';
import HeaderAdmin from '../../components/HeaderAdmin';
import Addform from '../../components/products/AddForm';
import { valideteAcess } from '../../API';

const BASE_OPTIONS = [
  { id: 1, name: 'Adicionar' },
  { id: 2, name: 'Remover' },
  { id: 3, name: 'Editar' },
  { id: 4, name: 'Ver' },
];

export default function Products() {
  const [typeRender, setTypeRender] = React.useState(null);

  const setStateRender = (type) => {
    setTypeRender(type);
  };

  return (
    <div>
      <HeaderAdmin />
      {!typeRender ? (
        <div>
          <h1>Opções de Produtos</h1>
          <OptionsManagement options={BASE_OPTIONS} onclick={setStateRender} />
        </div>
      ) : null }
      {typeRender === 'Adicionar' ? <Addform /> : null }
    </div>
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
