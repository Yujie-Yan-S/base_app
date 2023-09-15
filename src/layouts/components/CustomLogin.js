import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import Button from '@mui/material/Button'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { useState } from 'react'
import Divider from '@mui/material/Divider'
import LoginForm from './horizontal/LoginForm'
import { TextField, Box, Typography, Checkbox } from '@mui/material'
import { styled } from '@mui/material/styles'

function SignupTabContent() {
  const [checked, setChecked] = useState(true)

  const handleChange = event => {
    setChecked(event.target.checked)
  }

  const CustomTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    }
  })

  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
      <Box width={'72%'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Typography variant={'h6'} mb={3} alignSelf={'start'}>
          Your Email
        </Typography>
        <TextField label='Please enter you email' type='email' fullWidth={true} />

        <Typography variant={'h6'} mt={4} mb={3} alignSelf={'start'}>
          Password
        </Typography>
        <TextField label='Create password between 6 - 20 characters' type='password' fullWidth={true} />

        <Typography variant={'h6'} mt={4} mb={3} alignSelf={'start'}>
          Confirm Your Password
        </Typography>
        <TextField label='Please re-enter your password' type='text' fullWidth={true} />

        <Typography variant={'h6'} mt={4} mb={3} alignSelf={'start'}>
          Phone Number
        </Typography>
        <TextField label='Please enter your phone number' type='text' fullWidth={true} />

        <Typography variant={'h6'} mt={4} mb={3} alignSelf={'start'}>
          Verification Code
        </Typography>
        <Box display={'flex'} width={'100%'} mb={4}>
          <Box width={'80%'}>
            <CustomTextField label='Please enter verification code' type='password' fullWidth={true} />
          </Box>
          <Box width={'30%'}>
            <Button variant='contained' sx={{ height: '56px', borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
              Get Code
            </Button>
          </Box>
        </Box>

        <Box display={'flex'} mb={4}>
          <Checkbox checked={checked} onChange={handleChange} sx={{ p: 0 }} />
          <Typography color={theme => theme.palette.primary.main} fontSize={'10px'}>
            I accept AI Roboto Edu’s Term of Use and Privacy Notice
          </Typography>
        </Box>

        <Button variant='contained' sx={{ width: '50%' }}>
          Sign Up
        </Button>
      </Box>
    </Box>
  )
}

const LoginDialog = ({ open, onClose, initialTab, switchTab }) => {
  const handleTabChange = (event, newValue) => {
    switchTab(newValue)
  }

  return (
    <Dialog open={open} onClose={onClose} fullWidth={true} maxWidth={'xs'}>
      <Tabs value={initialTab} onChange={handleTabChange} sx={{ display: 'flex' }}>
        <Tab label='Log In' />
        <Tab label='Sign Up' />
      </Tabs>
      <Divider sx={{ backgroundColor: theme => theme.palette.primary.main }} />

      <DialogContent>
        {initialTab === 0 && <LoginForm onClose={onClose} />} {/* Render Login content when activeTab is 0 */}
        {initialTab === 1 && <SignupTabContent />} {/* Render Signup content when activeTab is 1 */}
      </DialogContent>
    </Dialog>
  )
}

export default LoginDialog
