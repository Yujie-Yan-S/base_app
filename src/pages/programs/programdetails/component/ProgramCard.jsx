import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'

export default function ProjectCard({ img }) {
  return (
    // sx={{ border: "5px solid red" }}
    <Box>
      <Card
        sx={{
          width: 200,
          borderRadius: '8px',
          boxShadow: '2px 4px 10px rgba(0, 0, 0, 0.5)',
          position: 'relative'
        }}
      >
        <CardMedia component='img' alt='green iguana' height='200' image='https://picsum.photos/200/300' />
        <Typography
          variant='h5'
          sx={{
            position: 'absolute',
            top: '80%',
            left: '20%',
            transform: 'translate(-50%, -50%)',
            color: 'black'
          }}
        >
          Project
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
