import React from 'react';
import { parseCookies } from 'nookies';
import HeaderAdmin from '../../components/HeaderAdmin';
import NavigationBarAdmin from '../../components/NavigationBarAdmin';
import { valideteAcess } from '../../API';
import { AuthContext } from '../../contexts';
import Loading from '../../components/Loading';

export default function Admin() {
  const { user } = React.useContext(AuthContext);

  return (
    <div>
      {user ? (
        <header>
          <HeaderAdmin />
          <NavigationBarAdmin />
        </header>
      ) : <Loading />}
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
