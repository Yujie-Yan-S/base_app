import { useState } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import useMediaQuery from '@mui/material/useMediaQuery'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import Typography from '@mui/material/Typography'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

import Icon from 'src/@core/components/icon'

import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const LoginForm = () => {
  const LinkStyled = styled(Link)(({ theme }) => ({
    fontSize: '0.875rem',
    textDecoration: 'none',
    color: theme.palette.primary.main
  }))
  const [rememberMe, setRememberMe] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(5).required()
  })

  const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
    '& .MuiFormControlLabel-label': {
      fontSize: '0.875rem',
      color: theme.palette.text.secondary
    }
  }))

  const defaultValues = {
    password: 'admin',
    email: 'admin@materio.com'
  }
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    // defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    const { email, password } = data
    auth.login({ email, password, rememberMe }, () => {
      setError('email', {
        type: 'manual',
        message: 'Email or Password is invalid'
      })
    })
  }

  return (
    <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
      <FormControl fullWidth sx={{ mb: 4 }}>
        <Controller
          name='email'
          control={control}
          rules={{ required: true }}
          render={({ field: { value, onChange, onBlur } }) => (
            <TextField
              autoFocus
              label='Email'
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              error={Boolean(errors.email)}
              placeholder='Enter your email or user name'
            />
          )}
        />
        {errors.email && <FormHelperText sx={{ color: 'error.main' }}>{errors.email.message}</FormHelperText>}
      </FormControl>
      <FormControl fullWidth sx={{ mb: 4 }}>
        <InputLabel htmlFor='auth-login-v2-password' error={Boolean(errors.password)}>
          Password
        </InputLabel>
        <Controller
          name='password'
          control={control}
          rules={{ required: true }}
          render={({ field: { value, onChange, onBlur } }) => (
            <OutlinedInput
              value={value}
              onBlur={onBlur}
              label='Password'
              onChange={onChange}
              id='auth-login-v2-password'
              error={Boolean(errors.password)}
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    edge='end'
                    onMouseDown={e => e.preventDefault()}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <Icon icon={showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} fontSize={20} />
                  </IconButton>
                </InputAdornment>
              }
            />
          )}
        />
        {errors.password && (
          <FormHelperText sx={{ color: 'error.main' }} id=''>
            {errors.password.message}
          </FormHelperText>
        )}
      </FormControl>

      <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {
          <TextField
            autoFocus
            label='Phone number'
            error={Boolean(errors.email)}
            placeholder='Enter your email or user name'
          />
        }
      </Box>

      <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {
          <TextField
            autoFocus
            label='Verification code'
            error={Boolean(errors.email)}
            placeholder='Enter your email or user name'
          />
        }
      </Box>

      <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <FormControlLabel
          label='Remember Me'
          control={<Checkbox checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} />}
        />
        <LinkStyled href='/forgot-password'>Forgot Password?</LinkStyled>
      </Box>
      <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 7 }}>
        Login
      </Button>
      <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Typography variant='body2' sx={{ mr: 2 }}>
          New on our platform?
        </Typography>
        <Typography variant='body2'>
          <LinkStyled href='/register'>Create an account</LinkStyled>
        </Typography>
      </Box>
      <Divider sx={{ my: theme => `${theme.spacing(5)} !important` }}>or</Divider>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <IconButton href='/' component={Link} sx={{ color: '#497ce2' }} onClick={e => e.preventDefault()}>
          <Icon icon='mdi:facebook' />
        </IconButton>
        <IconButton href='/' component={Link} sx={{ color: '#1da1f2' }} onClick={e => e.preventDefault()}>
          <Icon icon='mdi:twitter' />
        </IconButton>
        <IconButton
          href='/'
          component={Link}
          onClick={e => e.preventDefault()}
          sx={{ color: theme => (theme.palette.mode === 'light' ? '#272727' : 'grey.300') }}
        >
          <Icon icon='mdi:github' />
        </IconButton>
        <IconButton href='/' component={Link} sx={{ color: '#db4437' }} onClick={e => e.preventDefault()}>
          <Icon icon='mdi:google' />
        </IconButton>
      </Box>
    </form>
  )
}
export default LoginForm
