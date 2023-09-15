export default {
  meEndpoint: 'http://api.airobotoedu.com/api/get_information_by_token',
  loginEndpoint: 'http://api.airobotoedu.com/api/login',
  registerEndpoint: '/jwt/register',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken', // logout | refreshToken
  getCodeDisableTime: 5 // How long to disable get verification code after sucessful request
}
