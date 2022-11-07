import React from "react";
import Image from "next/image";
import Loading from '../components/Loading';
import { AuthContext } from "../contexts";
import MeetingRoomSharpIcon from '@mui/icons-material/MeetingRoomSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import Router from "next/router";

export default function HeaderAdmin() {
  const { user, logout } = React.useContext(AuthContext);

  return(
    <div>
      {!user ? <Loading/> : (
    <header className="main-header">
      <div className="logo">
        <Image
                  src="https://drive.google.com/uc?export=view&id=1QasQHkXQwnUYo6xeGuQxBRNjVVVpkUG4"
                  alt="Vercel Logo"
                  width={50}
                  height={50}
          />
          <div>
            <HomeSharpIcon onClick={() => Router.push('/catalog')}/>
            <MeetingRoomSharpIcon onClick={()=> logout()}/>
          </div>
        </div>
        <h4>{`Bem vindo(a) ${user.name}`}</h4>
    </header>
      )}
    </div>
  )
}
