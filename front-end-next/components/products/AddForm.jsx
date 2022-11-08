import {
  Button,
  Checkbox,
  FormControl, FormControlLabel, InputLabel, OutlinedInput,
} from '@mui/material';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
// import { nanoid } from 'nanoid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { getAllCategory, setNewProduct, getAllSizes } from '../../API';
import Loading from '../Loading';
import TableSize from './TableSize';

const DEFAULT_IMG = 'https://drive.google.com/uc?export=view&id=1SM76ru0V3C3wrHMJNNhFeTjftet_3L_4';

export default function AddForm() {
  const [values, setValues] = React.useState({
    name: '',
    price: '',
    description: '',
    category: '',
    photos: [],
    sizes: [],
  });
  const [alert, setAlert] = React.useState({ img: false, size: false });
  const [categories, setCategories] = React.useState(null);
  const [sizeList, setSizesList] = React.useState(null);
  const [urlImg, setUrlImg] = React.useState('');
  const [thumbnail, setThumbnail] = React.useState(false);
  const [size, setSize] = React.useState({ id: '', name: '' });
  const [quantity, setQuantity] = React.useState('');

  React.useEffect(() => {
    const getCategories = async () => {
      const response = await getAllCategory();
      setCategories(response);
    };
    const getSizes = async () => {
      const response = await getAllSizes();
      setSizesList(response);
    };
    getCategories();
    getSizes();
  }, []);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const addPhoto = () => {
    const checkImg = values.photos.some((photo) => urlImg === photo.img);
    if (checkImg) {
      setUrlImg('');
      setAlert({ ...alert, img: true });
      setTimeout(() => {
        setAlert({ ...alert, img: false });
      }, 5000);
      return;
    }
    setValues({ ...values, photos: [...values.photos, { img: urlImg, thumbnail }] });
    setUrlImg('');
  };

  const addSize = () => {
    const checkSize = values.sizes.some((item) => item.name === size.name);
    if (checkSize) {
      setUrlImg('');
      setAlert({ ...alert, size: true });
      setTimeout(() => {
        setAlert({ ...alert, size: false });
      }, 5000);
      return;
    }
    setValues({ ...values, sizes: [...values.sizes, { ...size, quantity }] });
    setSize({ id: '', name: '' });
    setQuantity('');
  };

  const deletePhoto = (link) => {
    const newArray = values.photos.filter((photo) => photo !== link);
    setValues({ ...values, photos: [...newArray] });
  };

  const registerThumbnail = () => {
    setThumbnail(!thumbnail);
  };

  const cadastrarProduto = async () => {
    const {
      name, price, description, photos, category,
    } = values;
    const response = await setNewProduct({
      name, price, description, photos, category,
    });
    console.log(response);
  };

  return (
    <div>
      {
        alert.img ? (
          <Stack className="alert" sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">Essa foto já foi adicionada!</Alert>
          </Stack>
        ) : null
      }
      {
        alert.size ? (
          <Stack className="alert" sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">Esse tamanho já foi adicionado!</Alert>
          </Stack>
        ) : null
      }
      {!categories || !sizeList ? <Loading /> : (
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
              <MenuItem key={option.name} value={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-currency"
            select
            label="size"
            value={size.name}
          >
            {sizeList.map((option) => (
              <MenuItem
                key={option.id}
                value={option.name}
                onClick={() => setSize(option)}
              >
                {option.name}
              </MenuItem>
            ))}
          </TextField>
          <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-multiline-flexible">Quant.</InputLabel>
            <OutlinedInput
              id="outlined-multiline-flexible"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              label="quantity"
            />
          </FormControl>
          <Button
            className="login-btn"
            type="button"
            variant="contained"
            disableElevation
            onClick={addSize}
          >
            Add tamanho
          </Button>
          <TableSize sizes={values.sizes} />
          <div>
            <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
              <InputLabel htmlFor="outlined-multiline-flexible">Foto</InputLabel>
              <OutlinedInput
                id="outlined-multiline-flexible"
                type="text"
                value={urlImg}
                onChange={(e) => setUrlImg(e.target.value)}
                label="urlImg"
              />
            </FormControl>
            <FormControlLabel control={<Checkbox disabled={thumbnail} onClick={registerThumbnail} />} label="Foto de Capa" />
            <Button
              className="login-btn"
              type="button"
              variant="contained"
              disableElevation
              onClick={addPhoto}
            >
              Add Foto
            </Button>
            <img src={urlImg || DEFAULT_IMG} width={300} height={300} alt="showcase" />
            {values.photos.map((link) => (
              <div key={link}>
                <Image src={link.img} width={50} height={50} alt="itensAdd" />
                <DeleteForeverIcon onClick={() => deletePhoto(link)} />
              </div>
            ))}
          </div>
          <Button
            className="login-btn"
            type="button"
            variant="contained"
            disableElevation
            onClick={cadastrarProduto}
          >
            Add Produto
          </Button>
        </form>
      )}
    </div>
  );
}
