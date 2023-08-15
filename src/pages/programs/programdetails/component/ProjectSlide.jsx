import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ProjectCard from './ProjectCard'
import { Box, useMediaQuery } from '@mui/material'

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div className={className} style={{ ...style, display: 'block', color: 'blue' }} onClick={onClick}>
      <ArrowForwardIosIcon />
    </div>
  )
}

const ProjectSlide = () => {
  const data = [
    { src: 'images/programs/reptile.jpeg' },
    { src: 'images/programs/dogs.jpeg' },
    { src: 'images/programs/elephant.jpeg' },
    { src: 'images/programs/fox.jpeg' },
    { src: 'images/programs/deer.jpeg' },
    { src: 'images/programs/tiger.jpeg' }
  ]
  const lg = useMediaQuery(theme => theme.breakpoints.down('lg'))
  const xl = useMediaQuery(theme => theme.breakpoints.down('xl'))
  const md = useMediaQuery(theme => theme.breakpoints.down('md'))
  const sm = useMediaQuery(theme => theme.breakpoints.down('sm'))
  const xs = useMediaQuery(theme => theme.breakpoints.down('xs'))

  let slidesToShow = data.length
  let slidesToScroll = data.length

  if (xs) {
    slidesToShow = 1
    slidesToScroll = 1
  } else if (sm) {
    slidesToShow = 1
    slidesToScroll = 1
  } else if (md) {
    slidesToShow = 2
    slidesToScroll = 2
  } else if (lg) {
    slidesToShow = 3
    slidesToScroll = 3
  } else {
    slidesToShow = 4
    slidesToScroll = 4
  }
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <Box>
      <Slider {...settings}>
        {data.map((item, i) => (
          <ProjectCard key={i} img={item} />
        ))}
      </Slider>
    </Box>
  )
}

export default ProjectSlide
