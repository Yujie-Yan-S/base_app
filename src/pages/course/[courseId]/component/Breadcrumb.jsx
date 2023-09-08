import * as React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

function handleClick(event) {
  event.preventDefault()
  console.info('You clicked a breadcrumb.')
}

export default function CustomBreadcrumb() {
  const breadcrumbs = [
    <Link underline='hover' key='1' href='/course' onClick={handleClick}>
      <Typography variant='h7' color={'white!important'}>
        Course
      </Typography>
    </Link>,

    <Typography key='2' variant='h7' color={'white!important'}>
      Lingke Education System
    </Typography>
  ]

  return (
    <Breadcrumbs separator={<NavigateNextIcon fontSize='small' />} aria-label='breadcrumb' color={'white!important'}>
      {breadcrumbs}
    </Breadcrumbs>
  )
}
