import React from 'react';
import { parseCookies } from 'nookies';
import HeaderAdmin from '../../components/HeaderAdmin';
import AdminTools from '../../components/AdminTools';
import { valideteAcess } from '../../API';
import { AuthContext } from '../../contexts';
import Loading from '../../components/Loading';

export default function Admin() {
  const { activeUser } = React.useContext(AuthContext);

  return (
    <div className="admin-page">
      {activeUser ? (
        <header>
          <HeaderAdmin />
          <AdminTools />
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
        destination: '/login',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
