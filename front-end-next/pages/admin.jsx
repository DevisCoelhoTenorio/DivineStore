import React from "react";
// import Loading from '../components/Loading';
import { parseCookies } from 'nookies'
import { AuthContext } from "../contexts";
import Image from "next/image";
import Loading from '../components/Loading'

export default function Admin() {
  const { user } = React.useContext(AuthContext);

  return(
    <div>
      {!user.name ? <Loading/> : (
    <header className="main-header">
      <div className="logo">
        <Image
                  src="https://drive.google.com/uc?export=view&id=1QasQHkXQwnUYo6xeGuQxBRNjVVVpkUG4"
                  alt="Vercel Logo"
                  width={50}
                  height={50}
          />
        </div>
        <h1>{`Bem vindo(a) ${user.name}`}</h1>
    </header>
      )}
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
    const { 'divine.token': token } = parseCookies(ctx);
    if(!token) {
     return {
      redirect: {
        destination: '/catalog',
        permanent: false,
      }
     }
  }
    return {
      props: {}
    }
  }
