import { Box, Grid, Card, Chip, Button, Typography, CardActions, CardContent } from '@mui/material'

export default function ProgramCard({ id, title, description, tag, titleTag, background }) {
  const tagList = tag?.map((item, index) => <Chip key={index} label={item} color='primary' onClick={() => {}} />)

  const handleProgramClick = () => {}
  const handleTagClick = () => {}
  const handleTitleTagClick = () => {}

  return (
    <Box display='flex' alignItems='row' sx={{ backgroundImage: background }}>
      <Grid container>
        <Grid item md={8}>
          <Card
            sx={{
              border: 'none',
              boxShadow: 'none',
              backgroundColor: 'transparent',
              marginLeft: '1rem'
            }}
          >
            <CardContent>
              <Typography variant='h4' component='div' sx={{ color: '#000000' }}>
                <Box display='flex' alignItems='center'>
                  <span>{title}</span>
                  <Box marginLeft={6}>
                    <Chip label={titleTag} color='primary' onClick={() => {}} />
                  </Box>
                </Box>
              </Typography>
              <Typography sx={{ mb: 1.5 }}>
                <br />
              </Typography>
              <Typography
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  maxWidth: '70%', // Maximum width of each line
                  color: 'customColors.text'
                }}
                variant='body2'
              >
                {description}
              </Typography>
            </CardContent>

            <CardActions>{tagList}</CardActions>
          </Card>
        </Grid>

        <Grid
          item
          md={4}
          display='flex'
          flexDirection='column'
          justifyContent='flex-end'
          alignItems='flex-start'
          flexGrow={1}
          marginBottom='6px'
          sx={{ backgroundColor: 'transparent' }}
        >
          <Button variant='contained' href={`/programs/programdetails/${id}`} sx={{ marginLeft: '2rem' }}>
            <Typography variant='h6' color='white' sx={{ margin: '1rem' }}>
              View Program
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
