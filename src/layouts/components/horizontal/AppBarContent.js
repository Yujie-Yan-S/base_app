// // ** MUI Imports
// import Box from '@mui/material/Box'
//
// // ** Components
// import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
// import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
//
// const AppBarContent = props => {
//   // ** Props
//   const { settings, saveSettings } = props
//
//   return (
//     <Box sx={{ display: 'flex', alignItems: 'center' }}>
//       <ModeToggler settings={settings} saveSettings={saveSettings} />
//       <UserDropdown settings={settings} />
//     </Box>
//   )
// }
//
// export default AppBarContent

import Box from '@mui/material/Box'
import Navigation from '../CustomNavigation'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'
import CustomLogin from '../CustomLogin'
import React, { useState } from 'react'
import { useAuth } from '../../../hooks/useAuth'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Avatar from '@mui/material/Avatar'
import { log } from 'next/dist/server/typescript/utils'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined'
import { useEffect } from 'react'

const AppBarContent = props => {
  const { logout } = useAuth()

  const auth = useAuth()

  const [dialogOpen, setDialogOpen] = useState(false)

  const [initialTab, setInitialTab] = useState(0)

  const router = useRouter()

  // console.log(router)
  // console.log(router.isReady)

  useEffect(() => {
    if (router.isReady && router.query.returnUrl) {
      setDialogOpen(true)
    }
  }, [router.isReady])

  const handleDialogClose = () => {
    setDialogOpen(false)
  }

  const { settings, horizontalNavItems } = props

  const handleLogin = () => {
    setDialogOpen(true)
    setInitialTab(0)
  }

  const handleRegister = () => {
    setDialogOpen(true)
    setInitialTab(1)
  }

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClose = () => {
    setAnchorEl(null)
    setIshover(false)
  }

  const handleLogOut = () => {
    logout()
    setAnchorEl(null)
    setIshover(false)
    router.push('/home')
  }

  const [ishover, setIshover] = useState(false)

  const user = auth.user
  console.log('this is user info ', user)

  const handleClick = event => {
    setIshover(true)

    setAnchorEl(event.currentTarget)
  }

  const handleClickMyProgram = () => {
    router.push('/my-program')
  }

  console.log('user is ', user)

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <style jsx>{`
        .btn:hover {
          opacity: 0.8;
          cursor: pointer;
        }
      `}</style>
      <Navigation settings={settings} horizontalNavItems={horizontalNavItems} />
      {!user && (
        <>
          <div className={'btn'} onClick={handleLogin}>
            <Typography variant='h6' noWrap sx={{ width: 100, fontWeight: 'bold' }}>
              Log In
            </Typography>
          </div>
          <div className={'btn'} onClick={handleRegister}>
            <Typography variant='h6' noWrap sx={{ width: 100, fontWeight: 'bold' }}>
              Sign Up
            </Typography>
          </div>
        </>
      )}
      {user !== null && (
        <Box className={'comtainerbox'} display={'flex'}>
          <Avatar
            onClick={handleClick}
            className='avatar'
            sx={{
              height: '40px',
              width: '40px',
              backgroundColor: theme => theme.palette.primary.main,
              color: 'white',
              fontSize: '30px',
              '&:hover': {
                opacity: 0.8,
                cursor: 'pointer'
              }
            }}
          >
            {user?.user?.firstName.charAt(0)}{' '}
          </Avatar>
          <KeyboardArrowUpOutlinedIcon
            sx={{
              ml: 1,
              fontSize: '30px',
              color: ishover ? 'blue' : 'initial',
              transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
              opacity: ishover ? 1 : 0,
              transform: ishover ? 'rotate(-180deg)' : 'rotate(0)',
              cursor: 'pointer' // Add cursor style for hovering effect
            }}
          />

          <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button'
            }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
          >
            <MenuItem onClick={handleClickMyProgram}>
              <Typography fontWeight={'500'}>My Programs</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography fontWeight={'500'}>Account</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography fontWeight={'500'}>Accomplishments</Typography>
            </MenuItem>
            <MenuItem onClick={handleLogOut}>
              <Typography fontWeight={'500'}>Log Out</Typography>
            </MenuItem>
          </Menu>
        </Box>
      )}
      <CustomLogin open={dialogOpen} onClose={handleDialogClose} initialTab={initialTab} switchTab={setInitialTab} />
    </Box>
  )
}

export default AppBarContent
