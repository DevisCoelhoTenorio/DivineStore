import React from "react";
import { createContext } from "react";
import { getToken } from '../API'
import useLocalStorage from '../hooks/useLocalStorage'
import Router from 'next/router'
import { valideteAcess } from '../API'

export const AuthContext = createContext({})

export function AuthProvider({children}) {
  const [token, setToken] = useLocalStorage('key')
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    const checkLogin = async () => {
      if(token) {
        const payload = await valideteAcess(token)
        if(payload) setUser(payload);
      }
    }
    checkLogin();
  }, [])

  async function signIn({ email, password }) {
    const { token, user } = await getToken({ email, password })
    if(token) {
      setToken(token)
      setUser(user)
      return Router.push('/admin')
    }
  }

  return (
    <AuthContext.Provider value={{ user, signIn, token }}>
        {children}
    </AuthContext.Provider>
  )
}
