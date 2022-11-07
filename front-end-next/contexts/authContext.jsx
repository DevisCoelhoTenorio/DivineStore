import React from "react";
import Router from 'next/router'
import { createContext } from "react";
import { getToken } from '../API'
import { valideteAcess } from '../API'
import { setCookie, parseCookies, destroyCookie } from 'nookies';

export const AuthContext = createContext({})

export function AuthProvider({children}) {
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    const checkLogin = async () => {
      const { 'divine.token': token } = parseCookies()
      if(token) {
        const payload = await valideteAcess(token)
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
  function logout() {
    destroyCookie(undefined, 'divine.token')
    setUser(null)
    return Router.push('/catalog')
  }

  return (
    <AuthContext.Provider value={{ user, signIn, logout }}>
        {children}
    </AuthContext.Provider>
  )
}
