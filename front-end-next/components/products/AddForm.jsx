import { FormControl, InputLabel, OutlinedInput } from '@mui/material';
import * as React from 'react';

export default function AddForm() {
  const [values, setValues] = React.useState({
    name: '',
    price: '',
    description: '',
    category: '',
    photos: [],
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <form action="">
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-email">Nome</InputLabel>
        <OutlinedInput
          id="outlined-adornment-email"
          type="text"
          value={values.name}
          onChange={handleChange('name')}
          label="Email"
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-email">Preço</InputLabel>
        <OutlinedInput
          id="outlined-adornment-email"
          type="text"
          value={values.price}
          onChange={handleChange('price')}
          label="Email"
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-email">Descrição</InputLabel>
        <OutlinedInput
          id="outlined-adornment-email"
          type="text"
          value={values.description}
          onChange={handleChange('description')}
          label="Email"
        />
      </FormControl>
    </form>
  );
}
