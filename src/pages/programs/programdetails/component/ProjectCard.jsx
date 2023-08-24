import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'

export default function ProjectCard({ name, img }) {
  return (
    <Box display={'flex'} justifyContent={'center'}>
      <Card
        sx={{
          width: 209,
          borderRadius: '8px',
          position: 'relative'
        }}
      >
        <CardMedia
          component='img'
          alt='project img'
          height='210'
          image={img}
          sx={{ opacity: '0.4', '&:hover': { opacity: 1, cursor: 'pointer' } }}
        />
        <Typography
          variant='h5'
          sx={{
            position: 'absolute',
            top: '80%',
            left: '20%',
            transform: 'translate(-50%, -50%)',
            color: 'black',
            pl: 4
          }}
        >
          {name}
        </Typography>
        {/* <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </Box>
  )
}
