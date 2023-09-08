export default {
  meEndpoint: '/auth/me',
  loginEndpoint: 'http://api.airobotoedu.com/api/login',
  registerEndpoint: '/jwt/register',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken' // logout | refreshToken
}
