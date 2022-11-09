import * as React from 'react';
import { parseCookies } from 'nookies';
import OptionsManagement from '../../components/OptionsManagement';
// import HeaderAdmin from '../../components/HeaderAdmin';
import Addform from '../../components/products/AddForm';
import { valideteAcess } from '../../API';

const BASE_OPTIONS = [
  { code: 1, name: 'Adicionar' },
  { code: 2, name: 'Remover' },
  { code: 3, name: 'Editar' },
  { code: 4, name: 'Ver' },
];

export default function Products() {
  const [typeRender, setTypeRender] = React.useState(null);

  const setStateRender = (type) => {
    setTypeRender(type);
  };

  return (
    <div>
      {/* <HeaderAdmin /> */}
      {!typeRender ? (
        <div>
          <h1>Gerenciar Produtos</h1>
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
