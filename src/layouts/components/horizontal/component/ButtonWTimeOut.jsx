import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button'

const MyButton = ({ resetTime }) => {
  const [isDisabled, setIsDisabled] = useState(false)
  const [countDown, setCountDown] = useState(0)
  console.log('render')

  useEffect(() => {
    console.log(countDown, 'countDown')
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

  const handleClick = () => {
    if (!isDisabled) {
      setIsDisabled(true)
      setCountDown(19)
    }
  }

  return (
    <Button variant='contained' color='primary' disabled={isDisabled} onClick={handleClick}>
      {isDisabled ? `(${countDown})s to resend` : `Get code`}
    </Button>
  )
}

export default MyButton
