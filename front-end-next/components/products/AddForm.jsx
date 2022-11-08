import {
  FormControl, InputLabel, OutlinedInput,
} from '@mui/material';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { getAllCategory } from '../../API';
import Loading from '../Loading';

export default function AddForm() {
  const [values, setValues] = React.useState({
    name: '',
    price: '',
    description: '',
    category: '',
    photos: [],
  });
  const [categories, setCategories] = React.useState(null);

  React.useEffect(() => {
    const getCategories = async () => {
      const response = await getAllCategory();
      setCategories(response);
    };
    getCategories();
  });

  const handleChange = (prop) => (event) => {
    console.log(event);
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div>
      {!categories ? <Loading /> : (
        <form action="">
          <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-multiline-flexible">Nome</InputLabel>
            <OutlinedInput
              id="outlined-multiline-flexible"
              type="text"
              value={values.name}
              onChange={handleChange('name')}
              label="name"
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-email">Preço</InputLabel>
            <OutlinedInput
              id="outlined-adornment-email"
              type="number"
              value={values.price}
              onChange={handleChange('price')}
              label="price"
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-email">Descrição</InputLabel>
            <OutlinedInput
              id="outlined-adornment-email"
              type="text"
              value={values.description}
              onChange={handleChange('description')}
              label="description"
              multiline
              rows={5}
            />
          </FormControl>
          <TextField
            id="outlined-select-currency"
            select
            label="category"
            value={values.category}
            onChange={handleChange('category')}
          >
            {categories.map((option) => (
              <MenuItem key={option.name} value={option.name}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
        </form>
      )}
    </div>
  );
}
