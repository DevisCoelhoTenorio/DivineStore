import React from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import Image from 'next/image';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Link from 'next/link';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { parseCookies } from 'nookies';
import { valideteAcess } from '../API';
import { AuthContext } from '../contexts';

export default function Login() {
  const { signIn } = React.useContext(AuthContext);
  const [values, setValues] = React.useState({
    showPassword: false,
    showAlert: false,
  });

  const validationSchema = yup.object({
    email: yup
      .string()
      .email('É necessário uso de um e-mail válido!')
      .required('O campo email não pode ser vazio!'),
    password: yup
      .string()
      .required('O campo senha não pode estar vazio!'),
  });

  const login = async (loginRequest) => {
    const status = await signIn(loginRequest);
    if (!status) {
      setValues({ ...values, showAlert: true });
      setTimeout(() => {
        setValues({ ...values, showAlert: false });
      }, 5000);
    }
  };

  const initialValues = {
    email: '',
    password: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (loginRequest) => login(loginRequest),
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      {values.showAlert ? (
        <Stack className="alert" sx={{ width: '100%' }} spacing={2}>
          <Alert severity="error">Email ou Password incorreto!</Alert>
        </Stack>
      ) : null}
      <form className="login-page" action="" onSubmit={formik.handleSubmit}>
        <div className="login-box">
          <div className="logo-container">
            <Image
              src="https://drive.google.com/uc?export=view&id=1QasQHkXQwnUYo6xeGuQxBRNjVVVpkUG4"
              width={200}
              height={200}
              alt="divine logo"
            />
          </div>
          <div className="credentials-container">
            <div className="greetings-container">
              <h2>Olá,</h2>
              <h4>seja bem vinda(o)!</h4>
            </div>
            <TextField
              id="email"
              type="email"
              name="email"
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              onChange={formik.handleChange}
              label="E-mail"
            />
            <TextField
              id="password"
              name="password"
              type={values.showPassword ? 'text' : 'password'}
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              endAdornment={(
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
                )}
              label="Senha"
            />
            <Button
              className="login-btn"
              type="submit"
              variant="contained"
              disableElevation
            >
              Entrar
            </Button>
            <div className="links-container">
              <Link
                href="https://wa.me/5582981795512"
                target="_blank"
                className="link"
              >
                <WhatsAppIcon />
              </Link>
              <Link
                href="https://www.instagram.com/divine.brazil/"
                target="_blank"
                className="link"
              >
                <InstagramIcon />
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const { 'divine.token': token } = parseCookies(ctx);
  const { admin, name } = await valideteAcess(token);
  if (admin) {
    return {
      redirect: {
        destination: '/admin',
        permanent: false,
      },
    };
  }
  if (name) {
    return {
      redirect: {
        destination: '/catalog',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
