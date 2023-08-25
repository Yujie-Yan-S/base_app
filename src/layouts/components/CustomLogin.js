import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import Button from '@mui/material/Button'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { useEffect, useState } from 'react'
import Divider from '@mui/material/Divider'
import LoginForm from './horizontal/LoginForm'

function LoginTabContent() {
  return <LoginForm />
}

function SignupTabContent() {
  return 456
}

const LoginDialog = ({ open, onClose, initialTab, switchTab }) => {
  // useEffect(() => {
  //   setActiveTab(initialTab)
  // }, [initialTab])

  // console.log(activeTab)

  const handleTabChange = (event, newValue) => {
    console.log(newValue)

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
        {initialTab === 0 && <LoginTabContent />} {/* Render Login content when activeTab is 0 */}
        {initialTab === 1 && <SignupTabContent />} {/* Render Signup content when activeTab is 1 */}
      </DialogContent>
    </Dialog>
  )
}

export default LoginDialog
