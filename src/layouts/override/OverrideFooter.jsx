import { Grid, Typography, Box } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import PinterestIcon from '@mui/icons-material/Pinterest'

const OverrideFooter = () => {
  return (
    <Box width='100%'>
      <Grid
        container
        sx={{
          backgroundColor: theme =>
            theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.grey[800],
          color: 'white',
          p: 3
        }}
      >
        {/* Footer left */}
        <Grid container spacing={1} item sm={12} md={6}>
          <Grid item sm={12} md={4}>
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

          <Grid item sm={12} md={5}>
            <Typography variant='h6' color='white'>
              Collaboration
            </Typography>
            <Typography variant='body2' color='white'>
              Purchase Business Version
            </Typography>
          </Grid>

          <Grid item sm={12} md={3}>
            <Typography variant='h6' color='white'>
              Question
            </Typography>
            {/* Add your question content here */}
            <Typography variant='body2' color='white'>
              How to purchase
            </Typography>
          </Grid>
        </Grid>

        {/* Footer right */}
        <Grid container alignItems='flex-end' item sm={12} md={6}>
          <Grid container gap={2} justifyContent='flex-end'>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <PinterestIcon />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default OverrideFooter
