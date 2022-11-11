import React from 'react';
import MeetingRoomSharpIcon from '@mui/icons-material/MeetingRoomSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import Link from 'next/link';
import { nanoid } from 'nanoid';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { AuthContext, HeaderContext } from '../contexts';

export default function HeaderAdmin({ text, showManagement }) {
  const { logout } = React.useContext(AuthContext);
  const { managements, selectManagement } = React.useContext(HeaderContext);

  return (
    <div>
      <header className="admin-header">
        <div className="navigation">
          <div className="go-back-admin-catalog">
            <HomeSharpIcon className="header-icon" onClick={() => Router.push('/catalog')} />
            {showManagement ? <FirstPageIcon onClick={() => Router.back()} /> : null }
          </div>
          <p>{text}</p>
          <MeetingRoomSharpIcon className="header-icon" onClick={() => logout()} />
        </div>
        <div className="nav-tools">
          {(showManagement && managements?.length > 0) ? managements.map((item) => (
            <Link
              className="nav-tool"
              color="inherit"
              href={item.path}
              key={nanoid()}
              onClick={() => selectManagement(item.code)}
            >
              <p>{item.name}</p>
              <hr />
            </Link>
          )) : null}
        </div>
      </header>

    </div>
  );
}

HeaderAdmin.propTypes = {
  text: PropTypes.string.isRequired,
  showManagement: PropTypes.bool,
};

HeaderAdmin.defaultProps = {
  showManagement: false,
};
