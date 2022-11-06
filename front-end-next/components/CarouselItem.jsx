import React from 'react';
import { Paper } from '@mui/material'; // caso use o Button novamente, importa aqui.
import Image from 'next/image';

export default function({ image }) {
  return (
    <Paper className="carrousel-image-container">
        <Image className="carrousel-image" src={image} width={1920} height={550} alt="carrosel" />
        {/* <Button className="CheckButton">
          Venha conferir!
        </Button> */}
    </Paper>
)
}
