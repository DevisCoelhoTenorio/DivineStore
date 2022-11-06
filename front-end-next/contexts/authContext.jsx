import React from "react";
import Router from 'next/router'
import { createContext } from "react";
import { getToken } from '../API'
import { valideteAcess } from '../API'
import { setCookie, parseCookies } from 'nookies';

export const AuthContext = createContext({})

export function AuthProvider({children}) {
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    const checkLogin = async () => {
      const { 'divine.token': token } = parseCookies()
      console.log(token);
      if(token) {
        const payload = await valideteAcess(token)
        console.log("aqui", payload);
        if(payload) setUser(payload);
      }
    }
    checkLogin();
  }, [])

  async function signIn({ email, password }) {
    const { token, user } = await getToken({ email, password })
    console.log(token);
    if(token) {
      setCookie(undefined,'divine.token', token,  {
        maxAge: 60 * 60 * 1, //1 hora
      })
      setUser(user)
      return Router.push('/admin')
    }
  }

  return (
    <AuthContext.Provider value={{ user, signIn  }}>
        {children}
    </AuthContext.Provider>
  )
}
