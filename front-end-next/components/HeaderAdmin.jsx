import React from 'react';
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
        <header className="admin-header">
          <div className="navigation">
            <HomeSharpIcon className="header-icon" onClick={() => Router.push('/catalog')} />
            <p>{`Bem vindo(a), ${activeUser.name}!`}</p>
            <MeetingRoomSharpIcon className="header-icon" onClick={() => logout()} />
          </div>
        </header>
      )}
    </div>
  );
}
