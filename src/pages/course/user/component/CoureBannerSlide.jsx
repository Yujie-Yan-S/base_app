import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import { Box, Card, CardMedia } from '@mui/material'

const CourseBannerSlide = ({ img }) => {
  const customPaging = (i, total) => <span className='custom-dot'>{'< ' + (i + 1) + '/' + total + ' >'}</span>

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <Box width={'70%'} padding={10}>
      <Slider {...settings}>
        {img.map((item, index) => (
          <Card key={index}>
            <CardMedia component='img' alt='course img' image={item} sx={{ '&:hover': { cursor: 'pointer' } }} />
          </Card>
        ))}
      </Slider>
    </Box>
  )
}

export default CourseBannerSlide
