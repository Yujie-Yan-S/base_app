export default {
  meEndpoint: '/auth/me',
  loginEndpoint: 'http://api.airobotoedu.com/api/login',
  registerEndpoint: '/jwt/register',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken', // logout | refreshToken
  getCodeDisableTime: 30 // How long to disable get verification code after sucessful request
}
