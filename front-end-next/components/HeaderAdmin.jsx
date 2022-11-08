import React from 'react';
import Image from 'next/image';
import MeetingRoomSharpIcon from '@mui/icons-material/MeetingRoomSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import Router from 'next/router';
import { AuthContext } from '../contexts';
import Loading from './Loading';

export default function HeaderAdmin() {
  const { activeUser, logout } = React.useContext(AuthContext);

  return (
    <div>
      {!activeUser ? <Loading /> : (
        <header className="main-header">
          <div className="logo">
            <Image
              src="https://drive.google.com/uc?export=view&id=1QasQHkXQwnUYo6xeGuQxBRNjVVVpkUG4"
              alt="Vercel Logo"
              width={50}
              height={50}
            />
            <div>
              <HomeSharpIcon onClick={() => Router.push('/catalog')} />
              <MeetingRoomSharpIcon onClick={() => logout()} />
            </div>
          </div>
          <h4>{`Bem vindo(a) ${activeUser.name}`}</h4>
        </header>
      )}
    </div>
  );
}
