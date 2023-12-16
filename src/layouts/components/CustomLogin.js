import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import Button from '@mui/material/Button'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { useState } from 'react'
import Divider from '@mui/material/Divider'
import { useEffect } from 'react'


import FormControlLabel from "@mui/material/FormControlLabel";

import {styled} from "@mui/material/styles";

import {
  changeErrorMsg,
  clearError,
  clearMessage,
  generateOTP,
  registerUser
} from "../../store/features/authentication/authSlice";
import {useDispatch, useSelector} from "react-redux";
import Alert from "@mui/material/Alert";

import { nanoid } from 'nanoid';

function LoginTabContent() {
  return 123
}
import LoginForm from './horizontal/LoginForm'
import { TextField, Box, Typography, Checkbox } from '@mui/material'


function SignupTabContent() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };



  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')


  const handleGenerateOTP = () => {
    dispatch(generateOTP({
      "firstName": firstName,
      "lastName": lastName,
      "email": email,
      "password": password,
      "phoneNumber": phoneNumber

    })); // 使用生成的手机号码调用异步操作
  };

  const getCodeMsg = useSelector(state => state.authentication.message)

  const errorMsg = useSelector(state => state.authentication.error)


  useEffect(() => {
    if (getCodeMsg) {
      setOpen(true);

      const timer = setTimeout(() => {
        handleClose();
        dispatch(clearMessage())
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [dispatch, getCodeMsg]);

  useEffect(() => {
    if (errorMsg) {
      setOpen(true);

      const timer = setTimeout(() => {
        handleClose();
        dispatch(clearError())
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [dispatch, errorMsg]);

  const handleClose = () => {
    setOpen(false);
  };


  const handleRegistration = () => {
    if(password!==confirmPassword){
      dispatch(changeErrorMsg("Password not match"))

return;
    }


    dispatch(registerUser({
      "firstName": firstName,
      "lastName": lastName,
      "email": email,
      "password": password,
      "phoneNumber": phoneNumber,
      "code": verificationCode
    })); // 传递 userData 参数


  };

return (
      <Box display={"flex"} width={"900px"} flexDirection={"column"} justifyContent={"center"} alignItems={"spacebetween"}>
      <Box width={'100%'} display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"space-evenly"}>
        <Box width={"40%"} display={"flex"} flexDirection={"column"} alignItems={"center"} >
          <Typography variant={'h6'} mb={3} alignSelf={"start"}>
            Your Email
          </Typography>
          <TextField

            label="Please enter you email"
            type="email"
            fullWidth={true}

            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}

          />



          <Typography variant={'h6'} mt={4} mb={3} alignSelf={"start"}>
            Password
          </Typography>
          <TextField

            label="Create password between 6 - 20 characters"
            type="password"
            fullWidth={true}
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />

          <Typography variant={'h6'} mt={4} mb={3} alignSelf={"start"}>
            Confirm Your Password
          </Typography>
          <TextField

            label="Please re-enter your password"
            type="password"
            fullWidth={true}
            value={confirmPassword}
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}

          />




          <Typography variant={'h6'} mt={4} mb={3} alignSelf={"start"}>
            Phone Number
          </Typography>
          <TextField

            label="Please enter your phone number"
            type="text"

            fullWidth={true}
            value={phoneNumber}
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}

          />

        </Box>
        <Box width={"40%"} display={"flex"} flexDirection={"column"} alignItems={"center"} >
          <Typography variant={'h6'} mb={3} alignSelf={"start"}>
            First Name
          </Typography>
          <TextField

            label="Please enter you first name"
            type="text"
            fullWidth={true}

            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}

          />

          <Typography variant={'h6'} mb={3} mt={4} alignSelf={"start"}>
            Last Name
          </Typography>
          <TextField

            label="Please enter you last name"
            type="text"
            fullWidth={true}

            value={lastName}
            onChange={(event) => {
              setLastName(event.target.value);
            }}

          />




          <Typography variant={'h6'} mt={4} mb={3} alignSelf={"start"}>
            Verification Code
          </Typography>
          <Box display={"flex"} width={'100%'} mb={4}>
            <Box width={'80%'}>
              <TextField
                sx={{'& .MuiOutlinedInput-root': {
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}}
                label="Please enter verification code"
                type="text"
                fullWidth={true}
                value={verificationCode}
                onChange={(event) => {
                  setVerificationCode(event.target.value);
                }}
              /></Box>
            <Box width={'30%'}>
              <Button variant="contained" sx={{height:"56px", borderTopLeftRadius:0, borderBottomLeftRadius:0}} onClick={handleGenerateOTP}>Get Code</Button>
            </Box>
          </Box>


          <Box display={"flex"} mt={4} mb={4}>
            <Checkbox  checked={checked}  onChange={handleChange} sx={{p:0}}/>
            <Typography variant={"h6"} color={theme => theme.palette.primary.main}>I accept AI Roboto Edu’s Term of Use and Privacy Notice</Typography>
          </Box>

          <Button variant="contained" sx={{width:"50%"}} onClick={handleRegistration}>Sign Up</Button>
        </Box>
        </Box>




        <Box mt={4}>
          {open && (
            <Alert severity={getCodeMsg ? 'success' : 'error'} onClose={handleClose}>
              {getCodeMsg ? getCodeMsg : errorMsg}
            </Alert>

          )}
        </Box>





    </Box>
  )




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
          <Typography variant={"h6"} color={theme => theme.palette.primary.main}>
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
    <Dialog open={open} onClose={onClose} fullWidth={false} maxWidth={'md'}
      sx={{'& .css-pzubjk-MuiDialogContent-root':{
        padding:0,
          paddingBottom:'1.25em'
        }}}
    >
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
