export default {
  meEndpoint: '//api.airobotoedu.com/api/get_information_by_token',
  loginEndpoint: '//api.airobotoedu.com/api/login',
  registerEndpoint: '/jwt/register',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken', // logout | refreshToken
  getCodeDisableTime: 5 // How long to disable get verification code after sucessful request
}
