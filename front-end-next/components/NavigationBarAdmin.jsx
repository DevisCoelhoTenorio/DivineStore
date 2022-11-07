import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { HeaderContext } from '../contexts';

// const BASE_OPTIONS = [
//   {id: 1, name: 'Adicionar'},
//   {id: 2, name: 'Remover'},
//   {id: 3, name: 'Editar'},
//   {id: 4, name: 'Ver'}
//   ]

  export default function NavigationBarAdmin() {
    const { managements, selectManagement } = React.useContext(HeaderContext);

    return (
      <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        {managements && managements.map((item) => (
        <Link
        underline="hover"
        color="inherit"
        href={item.path}
        key={item.id}
        onClick={() => selectManagement(item.id)}
        >
         {item.name}
        </Link>
        ))}
      </Breadcrumbs>
    </div>
  );
}

