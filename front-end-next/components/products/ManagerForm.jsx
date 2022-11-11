import {
  Button, Checkbox, FormControlLabel, TextField,
} from '@mui/material';
import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { getAllCategory, getAllSizes, createNewProduct } from '../../API';
import Loading from '../Loading';
import TableSize from './TableSize';
import useAlert from '../../hooks/useAlert';

// const DEFAULT_IMG = 'https://drive.google.com/uc?export=view&id=1SM76ru0V3C3wrHMJNNhFeTjftet_3L_4';

const initialValues = {
  name: '',
  price: '',
  description: '',
  category: '',
  promotion: null,
};

const INITIAL_ISDISABLED = {
  thumbnail: false,
};

const INITIAL_SIZE = { id: '', name: '' };

export default function ManagerForm() {
  const [quantity, setQuantity] = React.useState('');
  const [urlImg, setUrlImg] = React.useState('');
  const [photos, setPhotos] = React.useState([]);
  const [size, setSize] = React.useState(INITIAL_SIZE);
  const [registerSizes, setRegisterSizes] = React.useState([]);
  const [categories, setCategories] = React.useState(null);
  const [sizeList, setSizesList] = React.useState([]);
  const [thumbnail, setThumbnail] = React.useState(false);
  const [isDisabled, setIsDisabled] = React.useState(INITIAL_ISDISABLED);
  const [previewImg, setPreviewImg] = React.useState(null);
  const [alert, setAlert] = useAlert();
  const { query } = useRouter();

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
    if (query.id) {
      console.log(query.id);
    }
  }, []);

  const validationSchema = yup.object({
    name: yup
      .string()
      .required('O campo "Nome" não pode ser vazio!'),
    price: yup
      .string()
      .required('O campo "Preço" não pode estar vazio!'),
    description: yup
      .string()
      .required('O campo "Descrição" não pode ser vazio!'),
    category: yup
      .number()
      .required('O campo "Categoria" não pode ser vazio!'),
  });

  const verifyThumbnail = () => {
    if (photos.some((photo) => photo.thumbnail === true)) {
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
  }, [photos]);

  const addPhoto = async () => {
    const checkImg = photos.some((photo) => urlImg === photo.img);
    if (checkImg) {
      setUrlImg('');
      setAlert('addPhotoFailure');
      return;
    }
    setPhotos([...photos, { img: urlImg, thumbnail }]);
    setPreviewImg(null);
    setUrlImg('');
  };

  const remainingSize = sizeList.reduce((acc, curr) => {
    if (registerSizes.some((item) => item.name === curr.name)) {
      return acc;
    }
    return [...acc, curr];
  }, []);

  const isDisableSize = remainingSize.length === 0;

  const addSize = () => {
    setRegisterSizes([...registerSizes, { ...size, quantity }]);
    setSize(INITIAL_SIZE);
    setQuantity('');
  };

  const deleteSize = (id) => {
    const newArray = registerSizes.filter((item) => item.id !== id);
    setRegisterSizes(newArray);
  };

  const deletePhoto = (link) => {
    const newArray = photos.filter((photo) => photo.img !== link);
    setPhotos([...newArray]);
  };

  const cadastrarProduto = async ({
    name, price, description, category,
  }) => {
    const newProduct = {
      name, price, description, photos, categoryId: Number(category), sizes: registerSizes,
    };
    if (photos.length === 0 || !thumbnail || registerSizes.length === 0) {
      setAlert('registerProductFailure');
      return;
    }
    const response = await createNewProduct(newProduct);
    if (response) {
      setAlert('registerProductSuccess');
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (submitInputs) => cadastrarProduto(submitInputs),
  });

  return (
    <div className="add-product-container">
      {
        alert.status ? (
          <Stack className="alert" sx={{ width: '100%' }} spacing={2}>
            <Alert severity={alert.type}>{alert.message}</Alert>
          </Stack>
        ) : null
      }
      {!categories || !sizeList ? <Loading /> : (
        <form className="add-product-form" action="" onSubmit={formik.handleSubmit}>
          <div className="all-info-container">
            <div className="product-basic-info">
              <p>Informações do Produto</p>
              <TextField
                id="name"
                name="name"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                label="Nome"
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.namel}
              />
              <TextField
                id="price"
                name="price"
                type="number"
                value={formik.values.price}
                onChange={formik.handleChange}
                error={formik.touched.price && Boolean(formik.errors.price)}
                helperText={formik.touched.price && formik.errors.price}
                label="Preço"
              />
              <TextField
                id="description"
                name="description"
                type="text"
                value={formik.values.description}
                onChange={formik.handleChange}
                label="Descrição"
                multiline
                rows={5}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}
              />
              <p>Informe a categoria</p>
              <TextField
                id="category"
                name="category"
                select
                className="category-selection"
                label="Categoria"
                value={formik.values.category}
                onChange={formik.handleChange}
                error={formik.touched.category && Boolean(formik.errors.category)}
                helperText={formik.touched.category && formik.errors.category}
              >
                {categories.map((option) => (
                  <MenuItem key={option.name} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="promotion"
                name="promotion"
                type="number"
                value={formik.values.promotion}
                onChange={formik.handleChange}
                label="Desconto"
              />
            </div>
            <div className="size-info">
              <p>Tamanhos e quatidades</p>
              <TextField
                id="outlined-select-currency"
                select
                label="Tamanho"
                value={size.name}
                className="size-selection"
                disabled={isDisableSize}
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
              <TextField
                id="quantity"
                name="quantity"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                label="Quantidade"
                disabled={isDisableSize}
              />
              <Button
                className="add-product-btn"
                type="button"
                variant="contained"
                disableElevation
                onClick={addSize}
                disabled={isDisableSize}
              >
                Adicionar
              </Button>
              <TableSize
                sizes={registerSizes}
                deleteSize={deleteSize}
              />
            </div>
            <div className="image-info">
              <p>Fotos</p>
              <TextField
                id="urlImg"
                name="urlImg"
                type="text"
                value={urlImg}
                onChange={(e) => setUrlImg(e.target.value)}
                label="Link"
              />
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
            {photos.map((photo) => (
              <div key={photo.img} className="image-div">
                <Image src={photo.img} width={100} height={100} alt="itensAdd" />
                <DeleteForeverIcon onClick={() => deletePhoto(photo.img)} />
              </div>
            ))}
          </div>
          <Button
            className="add-product-btn finish-btn"
            type="submit"
            variant="contained"
            disableElevation
          >
            Finalizar Produto
          </Button>
        </form>
      )}
    </div>
  );
}
