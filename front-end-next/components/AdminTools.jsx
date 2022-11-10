import * as React from 'react';
import Link from '@mui/material/Link';
import { nanoid } from 'nanoid';
import { HeaderContext } from '../contexts';
import NavigationIcon from './NavigationIcon';

export default function AdminTools() {
  const { managements, selectManagement } = React.useContext(HeaderContext);

  return (
    <div role="presentation" className="admin-container">
      <div className="admin-section">
        {managements && managements.map((item) => (
          <Link
            underline="hover"
            color="inherit"
            href={item.path}
            key={nanoid()}
            onClick={() => selectManagement(item.code)}
          >
            <NavigationIcon name={item.name} Icon={item.icon} />
          </Link>
        ))}
      </div>
    </div>
  );
}
