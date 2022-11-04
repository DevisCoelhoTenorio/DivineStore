import React from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import Image from 'next/image';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { AuthContext } from '../contexts';


export default function Login() {
  const { signIn } = React.useContext(AuthContext);
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,
    showAlert: false,
  });

  const login = async () => {
    const { email, password } = values;
    signIn({ email, password })
    setValues({...values, showAlert: true });
    setTimeout(() => {
      setValues({...values, showAlert: false });
    }, 5000)
  }

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

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
     ): null}
  <form className="login-page" action="">
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
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
      <OutlinedInput
        id="outlined-adornment-email"
        type="text"
        value={values.email}
        onChange={handleChange('email')}
        label="Email"
      />
    </FormControl>
  <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
  <OutlinedInput
    id="outlined-adornment-password"
    type={values.showPassword ? 'text' : 'password'}
    value={values.password}
    onChange={handleChange('password')}
    endAdornment={
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
    }
    label="Password"
  />
</FormControl>
<Button
className="login-btn"
onClick= {login}
variant="contained" disableElevation>
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
)
}
