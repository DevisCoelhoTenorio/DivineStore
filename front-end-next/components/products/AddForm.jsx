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
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { getAllCategory, getAllSizes, createNewProduct } from '../../API';
import Loading from '../Loading';
import TableSize from './TableSize';

// const DEFAULT_IMG = 'https://drive.google.com/uc?export=view&id=1SM76ru0V3C3wrHMJNNhFeTjftet_3L_4';

const INITIAL_VALUES = {
  name: '',
  price: '',
  description: '',
  category: '',
  photos: [],
  sizes: [],
};

const INITIAL_ISDISABLED = {
  thumbnail: false,
};

const INITIAL_SIZE = { id: '', name: '' };

export default function AddForm() {
  const [values, setValues] = React.useState(INITIAL_VALUES);
  const [alert, setAlert] = React.useState({ img: false, create: false });
  const [categories, setCategories] = React.useState(null);
  const [sizeList, setSizesList] = React.useState([]);
  const [urlImg, setUrlImg] = React.useState('');
  const [thumbnail, setThumbnail] = React.useState(false);
  const [size, setSize] = React.useState(INITIAL_SIZE);
  const [quantity, setQuantity] = React.useState('');
  const [isDisabled, setIsDisabled] = React.useState(INITIAL_ISDISABLED);
  const [previewImg, setPreviewImg] = React.useState(null);

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

  const verifyThumbnail = () => {
    if (values.photos.some((photo) => photo.thumbnail === true)) {
      setIsDisabled({ ...isDisabled, thumbnail: true });
      setThumbnail(false);
      return;
    }
    if (isDisabled.thumbnail) {
      setIsDisabled({ ...isDisabled, thumbnail: false });
      setThumbnail(true);
    }
  };

  React.useEffect(() => {
    verifyThumbnail();
  }, [values.photos]);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const addPhoto = async () => {
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
    setPreviewImg(null);
    setUrlImg('');
  };

  const remainingSize = sizeList.reduce((acc, curr) => {
    if (values.sizes.some((item) => item.name === curr.name)) {
      return acc;
    }
    return [...acc, curr];
  }, []);

  const addSize = () => {
    setValues({ ...values, sizes: [...values.sizes, { ...size, quantity: Number(quantity) }] });
    setSize(INITIAL_SIZE);
    setQuantity('');
  };

  const deleteSize = (id) => {
    const newArray = values.sizes.filter((item) => item.id !== id);
    setValues({ ...values, sizes: [...newArray] });
  };

  const deletePhoto = (link) => {
    const newArray = values.photos.filter((photo) => photo.img !== link);
    setValues({ ...values, photos: [...newArray] });
  };

  const cadastrarProduto = async () => {
    const {
      name, price, description, photos, category, sizes,
    } = values;
    const newProduct = {
      name, price, description, photos, categoryId: Number(category), sizes,
    };
    const response = await createNewProduct(newProduct);
    if (response) {
      setUrlImg('');
      setAlert({ ...alert, create: true });
      setTimeout(() => {
        setAlert({ ...alert, create: false });
      }, 5000);
    }
  };

  return (
    <div className="add-product-container">
      {
        alert.create ? (
          <Stack className="alert" sx={{ width: '100%' }} spacing={2}>
            <Alert severity="success">Produto cadastrado com sucesso!</Alert>
          </Stack>
        ) : null
      }
      {
        alert.img ? (
          <Stack className="alert" sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">Essa foto já foi adicionada!</Alert>
          </Stack>
        ) : null
      }
      {!categories || !sizeList ? <Loading /> : (
        <form className="add-product-form" action="">
          <div className="all-info-container">
            <div className="product-basic-info">
              <p>Informações do Produto</p>
              <FormControl className="form-control" sx={{ m: 1, width: '35ch' }} variant="outlined">
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
              <p>Informe a categoria</p>
              <TextField
                id="outlined-select-currency"
                select
                className="category-selection"
                label="Categoria"
                value={values.category}
                onChange={handleChange('category')}
              >
                {categories.map((option) => (
                  <MenuItem key={option.name} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="size-info">
              <p>Tamanhos e quatidades</p>
              <TextField
                id="outlined-select-currency"
                select
                label="Tamanho"
                value={size.name}
                className="size-selection"
              >
                {remainingSize.map((option) => (
                  <MenuItem
                    key={option.id}
                    value={option.name}
                    onClick={() => setSize(option)}
                  >
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
              <FormControl className="quantity-selection" sx={{ m: 1, width: '35ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-multiline-flexible">Quantidade</InputLabel>
                <OutlinedInput
                  id="outlined-multiline-flexible"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  label="Quantidade"
                />
              </FormControl>
              <Button
                className="add-product-btn"
                type="button"
                variant="contained"
                disableElevation
                onClick={addSize}
              >
                Adicionar
              </Button>
              <TableSize sizes={values.sizes} deleteSize={deleteSize} />
            </div>
            <div className="image-info">
              <p>Fotos</p>
              <FormControl className="form-control" sx={{ m: 1, width: '35ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-multiline-flexible">Foto</InputLabel>
                <OutlinedInput
                  id="outlined-multiline-flexible"
                  type="text"
                  value={urlImg}
                  onChange={(e) => setUrlImg(e.target.value)}
                  label="urlImg"
                />
              </FormControl>
              <FormControlLabel
                control={(
                  <Checkbox
                    disabled={isDisabled.thumbnail}
                    onClick={() => setThumbnail(!thumbnail)}
                  />
                )}
                label="Foto de Capa"
              />
              <Button
                className="add-product-btn"
                type="button"
                variant="contained"
                disableElevation
                onClick={() => setPreviewImg(urlImg)}
              >
                Carregar foto
              </Button>
              <Button
                className="add-product-btn"
                type="button"
                variant="contained"
                disableElevation
                onClick={addPhoto}
              >
                Adicionar
              </Button>
              {previewImg && <img src={previewImg} width={300} height={300} alt="showcase" />}
            </div>
          </div>
          <div className="preview-images">
            {values.photos.map((photo) => (
              <div key={photo.img} className="image-div">
                <Image src={photo.img} width={100} height={100} alt="itensAdd" />
                <DeleteForeverIcon onClick={() => deletePhoto(photo.img)} />
              </div>
            ))}
          </div>
          <Button
            className="add-product-btn finish-btn"
            type="button"
            variant="contained"
            disableElevation
            onClick={cadastrarProduto}
          >
            Finalizar Produto
          </Button>
        </form>
      )}
    </div>
  );
}
