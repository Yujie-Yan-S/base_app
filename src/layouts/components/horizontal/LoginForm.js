import { Box, Typography, TextField, Button, FormHelperText, Checkbox } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useAuth } from 'src/hooks/useAuth'
import { styled } from '@mui/material/styles'
import Link from 'next/link'
import axios from 'axios'
import { useState } from 'react'
import MyButton from './component/ButtonWTimeOut'

const LoginForm = ({ onClose }) => {
  const [codeError, setCodeError] = useState({})

  const CustomTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    }
  })

  const LinkStyled = styled(Link)(({ theme }) => ({
    fontSize: '0.8rem',
    textDecoration: 'none',
    color: theme.palette.primary.main
  }))

  const LabelStyled = styled('label')(({ theme }) => ({
    fontSize: '0.8rem',
    textDecoration: 'none',
    color: theme.palette.primary.main
  }))

  const CheckBoxStyled = styled(Checkbox)({
    padding: '0'
  })

  const auth = useAuth()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  const email = watch('email')
  const phoneNumber = watch('phoneNumber')

  const errorCallback = () => {}

  const onSubmit = data => {
    // console.log(data)
    auth.login(data, errorCallback)
    onClose()
  }

  const handleVerificationClick = async () => {
    if (!phoneNumber || !email) {
      setCodeError({ error: 'Please enter email and phone number' })

return false
    }

    try {
      const res = await axios.post(
        `http://api.airobotoedu.com/api/phoneNumber/generateOTP/login
    `,
        { email, phoneNumber }
      )

      if (res.data.code === 402) {
        throw new Error('Phone number does not match the record')
      }
      if (res.data.code === 401) {
        throw new Error('Email does not match the record')
      }
    } catch (error) {
      setCodeError({ ...codeError, error: error.message })

return false
    }

    return true
  }

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} width={"900px"}>
      <Box width={'72%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
          <Typography mb={3} mt={3}>
            Email or Username
          </Typography>
          <TextField
            label='Please enter your email'
            fullWidth={true}
            {...register('email', { required: 'email is required', maxLength: { value: 20, message: 'Max is 20' } })}
          />
          {errors.email && <FormHelperText sx={{ color: 'error.main' }}>{errors.email.message}</FormHelperText>}

          <Typography mb={3} mt={3}>
            Password
          </Typography>
          <TextField
            label='Please enter your password'
            {...register('password', { required: 'password is required' })}
            fullWidth={true}
          />
          {errors.password && <FormHelperText sx={{ color: 'error.main' }}>{errors.password.message}</FormHelperText>}

          <Typography mb={3} mt={3}>
            Phone number{' '}
          </Typography>
          <TextField
            label='Please enter your phone number'
            {...register('phoneNumber', { required: 'phone number is required' })}
            fullWidth={true}
          />
          {errors.phoneNumber && (
            <FormHelperText sx={{ color: 'error.main' }}>{errors.phoneNumber.message}</FormHelperText>
          )}

          <Typography mb={3} mt={3}>
            Verification code
          </Typography>

          <Box display={'flex'} width={'100%'} mb={4}>
            <Box width={'80%'}>
              <CustomTextField
                label='Please enter verification code'
                {...register('code', { required: 'Verification code is required' })}
                fullWidth={true}
              />
            </Box>
            <Box width={'30%'}>
              <MyButton handleVerificationClick={handleVerificationClick}></MyButton>
            </Box>
          </Box>
          {codeError.error && <FormHelperText sx={{ color: 'error.main' }}>{codeError.error}</FormHelperText>}

          {/* reset pw + remember me */}
          <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} flexWrap='wrap' mt={3}>
            <LinkStyled href='/forgot-password'>Forget password</LinkStyled>
            <LabelStyled>
              Auto-Log In Next Time <CheckBoxStyled {...register('auto-log-in')} />
            </LabelStyled>
          </Box>

          <Box display={'flex'} justifyContent={'center'} mt={8}>
            <Button variant='contained' type='submit' sx={{ width: '70%', mt: '3' }}>
              Login{' '}
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default LoginForm
