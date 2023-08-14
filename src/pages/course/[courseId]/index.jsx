import { Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material'

export default function CourseDetails() {
  return (
    <>
      {/* Upper section  */}
      <Box sx={{ border: '2px solid red', background: theme => theme.palette.primary.main }}>
        <Box sx={{ marginLeft: '2rem', marginBottom: '2rem' }}>
          {/* Course title */}
          <Box sx={{ border: '2px solid red', margin: '2rem 0 1.5rem 0' }}>
            <Typography variant='h7' color='white'>
              Course&nbsp;&nbsp;&nbsp;&gt; &nbsp;&nbsp;&nbsp;&nbsp;Lingke Education System{' '}
            </Typography>
          </Box>
          {/* Class banner + detail*/}
          <Grid container md={12} sx={{ background: 'prime.main', color: 'white' }}>
            {/* left banner img */}
            <Grid item md={6}>
              <Box>
                <Card sx={{ width: '90%' }}>
                  <CardMedia
                    component='img'
                    alt='project img'
                    height='210'
                    image='https://picsum.photos/200/300'
                    sx={{ opacity: '0.4', '&:hover': { opacity: 1, cursor: 'pointer' } }}
                  />
                </Card>
              </Box>
            </Grid>

            {/* Right section */}
            <Grid item md={6} sx={{ border: '2px solid blue' }}>
              {/* left details */}
              <Grid container md={12} sx={{ border: '2px solid yellow', height: '100%' }}>
                {/* title, professor and purchase button */}
                <Grid item md={7} container direction={'column'} sx={{ border: '2px solid green' }}>
                  <Grid item md={5}>
                    <Typography variant='h5' color='white'>
                      Lingke Educational system
                    </Typography>
                  </Grid>
                  <Grid item md={3}>
                    <Typography variant='h7'>Dr.Max Li</Typography>
                  </Grid>
                  <Grid item md={4}>
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'flex-end'} sx={{ height: '100%' }}>
                      <Button variant='contained' sx={{ background: 'white', width: '45%' }}>
                        <Typography variant='h7' color='primary.main'>
                          Purchase now
                        </Typography>
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
                {/* Enrolled number  */}
                <Grid item md={5}>
                  <Box display={'flex'} flexDirection={'column'} justifyContent={'flex-end'} sx={{ height: '100%' }}>
                    <Typography variant='h7'>740 already enrolled</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Lower Section Class detial  */}
      <Grid container md={12}>
        {/* left section */}
        <Grid item md={8} sx={{ border: '2px solid red' }}>
          <Typography>Details</Typography>
        </Grid>
        {/* right section */}
        <Grid item md={4} sx={{ border: '2px solid blue' }}>
          <Typography>Instructor</Typography>
          <Typography>Dr.Max Li</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, perspiciatis. Excepturi, eos? Reprehenderit
            molestiae at, exercitationem aperiam dolores commodi. Natus magnam hic blanditiis deserunt officia iusto?
            Consequatur officia sit consectetur!
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}
