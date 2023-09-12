import { Card, CardContent, CardActionArea, CardMedia, Typography, Box } from '@mui/material'

const CourseCard = ({ img, title, tags }) => {
  const tagList = tags?.map((item, index) => (
    <Chip
      key={index}
      label={item}
      color='primary'
      size='small'
      onClick={() => {}}
      sx={{ margin: '0.2rem', fontSize: '0.7rem', padding: 0 }}
    />
  ))
  return (
    <Card sx={{ aspectRatio: '1/1' }}>
      <CardActionArea>
        <CardMedia component='img' image={img} alt='Card Image' />
        <CardContent sx={{ padding: 2 }}>
          <Typography
            sx={{
              fontWeight: '650',
              color: 'black',
              wordWrap: 'break-word',
              textOverflow: 'ellipsis',
              overflow: 'hidden'
            }}
          >
            {title}
          </Typography>
          <Box display={'flex'} mt={1} mb={2}>
            {tagList}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CourseCard
