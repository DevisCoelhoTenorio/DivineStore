import React from 'react';
import { Paper, Button } from '@mui/material';
import Image from 'next/image';
import Picture from './Picture';

export default function({ image }) {
  return (
    <Paper>
        <Picture image={ image } />
        <Button className="CheckButton">
          Venha conferir!
        </Button>
    </Paper>
)
}
