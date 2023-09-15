import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import auth from 'src/configs/auth'

const MyButton = ({ handleVerificationClick }) => {
  const [isDisabled, setIsDisabled] = useState(false)
  const [countDown, setCountDown] = useState(0)

  useEffect(() => {
    if (countDown === 0) {
      setIsDisabled(false)
      return
    }
    const id = setInterval(() => {
      setCountDown(preState => preState - 1)
    }, 1000)
    return () => {
      clearInterval(id)
    }
  }, [countDown])

  const handleClick = async () => {
    if ((await handleVerificationClick()) && !isDisabled) {
      setIsDisabled(true)
      setCountDown(auth.getCodeDisableTime)
    }
  }

  return (
    <Button
      variant='contained'
      color='primary'
      disabled={isDisabled}
      onClick={handleClick}
      sx={{ height: '56px', borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
    >
      {isDisabled ? `(${countDown})s resend` : `Get code`}
    </Button>
  )
}

export default MyButton
