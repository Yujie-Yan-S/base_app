// ** React Imports
import { createContext, useEffect, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import axios from 'axios'

// ** Config
import authConfig from 'src/configs/auth'

// ** Defaults
const defaultProvider = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve()
}
const AuthContext = createContext(defaultProvider)

const AuthProvider = ({ children }) => {
  // ** States
  const [user, setUser] = useState(defaultProvider.user)


  const [loading, setLoading] = useState(defaultProvider.loading)

  // ** Hooks
  const router = useRouter()
  useEffect(() => {
    const initAuth = async () => {
      const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)
      if (storedToken) {
        setLoading(true)

        await axios
          .get(authConfig.meEndpoint, {
            headers: {
              Authorization: storedToken
            }
          })
          .then(async response => {
            // console.log('res from token is', response.data.data.user)
            // console.log('user is', response.data.data.user.firstName)

            setLoading(false)
            setUser({ user: response.data.data.user })
          })
          .catch(() => {
            localStorage.removeItem('userData')
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('accessToken')
            setUser(null)
            setLoading(false)
            if (authConfig.onTokenExpiration === 'logout' && !router.pathname.includes('login')) {
              router.replace('/home')
            }
          })
      } else {
        setLoading(false)
      }
    }
    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLogin = (params, errorCallback) => {
    return axios
      .post(authConfig.loginEndpoint, params)
      .then(response => {
        console.log('res data is', response.data);
        console.log('if remember', params['auto-log-in']);

        if (params['auto-log-in']) {
          window.localStorage.setItem(authConfig.storageTokenKeyName, response.data.data.token);
          window.localStorage.setItem('userData', JSON.stringify(response.data.data.user));
        }
        console.log('response code is ', response.data.code);
        console.log('code is 200? ', response.data.code != 200);
        if (response.data.code != 200) {
          return response.data.msg; // 返回消息
        } else {
          console.log('entered else');
          setUser({ user: response.data.data.user });
          const returnUrl = router.query.returnUrl;
          const redirectURL = returnUrl && returnUrl !== '/home' ? returnUrl : '/home';

          router.replace(redirectURL);

return null; // 返回空值或其他标识符，表示登录成功
        }
      })
      .catch(err => {
        console.log('err is ', err);
        if (errorCallback) errorCallback(err);
        throw err; // 抛出错误以便外部捕获
      });
  };


  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
    router.push('/home')
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
