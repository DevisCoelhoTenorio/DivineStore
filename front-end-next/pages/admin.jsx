import { useRouter } from "next/router";
import React from "react";
import Loading from '../components/Loading';
// import userAuth from '../utils/userAuth';

export default function Admin() {
  // const router = useRouter();
  const [access, setAccess] = React.useState(true);

  // // React.useEffect(() => {
  // //   const authUser = async () => {
  // //     await userAuth('key', router)
  // //     setAccess(true);
  // //   }
  // //   authUser();
  // // }, [])

  // const logout = () => {
  //   localStorage.clear('key')
  //   setAccess(false);
  // }

  return(
    <div>
      {access ? (
        <div>
      <h1>OI</h1>
      {/* <button onClick={ logout }>
        Sair
      </button> */}
      </div>
      ) : <Loading />}
    </div>
  )
}
