import { Grid, Typography } from '@mui/material'

import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import PinterestIcon from '@mui/icons-material/Pinterest'

const OverrideFooter = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: theme =>
          theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.grey[800],
        color: 'white',
        p: 6
      }}
    >
      {/* About Section */}
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant='h6' color='white'>
          About
        </Typography>
        <Typography variant='body2' color='white'>
          Contact Us
        </Typography>
        <Typography variant='body2' color='white'>
          Company Information
        </Typography>
        {/* Add your about content here */}
      </Grid>

      {/* Collaboration Section */}
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant='h6' color='white'>
          Collaboration
        </Typography>
        {/* Add your collaboration content here */}
        <Typography variant='body2' color='white'>
          Purchase Business Version
        </Typography>
      </Grid>

      {/* Question Section */}
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant='h6' color='white'>
          Question
        </Typography>
        {/* Add your question content here */}
        <Typography variant='body2' color='white'>
          How to purchase
        </Typography>
      </Grid>

      {/* Social Media Section */}
      <Grid item xs={12} sm={6} md={3}>
        {/* Add your social media icons here */}
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
        <PinterestIcon />
      </Grid>
    </Grid>
  )
}

export default OverrideFooter
