import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
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

const ProjectSlide = ({ data }) => {
  // console.log('data is ', data)
  // console.log('data is ', data.data[0].cover)

  const lg = useMediaQuery(theme => theme.breakpoints.down('lg'))
  const xl = useMediaQuery(theme => theme.breakpoints.down('xl'))
  const md = useMediaQuery(theme => theme.breakpoints.down('md'))
  const sm = useMediaQuery(theme => theme.breakpoints.down('sm'))
  const xs = useMediaQuery(theme => theme.breakpoints.down('xs'))

  let slidesToShow = data && data.length
  let slidesToScroll = data && data.length

  if (xs) {
    slidesToShow = slidesToShow > 1 ? 1 : slidesToShow
    slidesToScroll = slidesToScroll > 1 ? 1 : slidesToScroll
  } else if (sm) {
    slidesToShow = slidesToShow > 1 ? 1 : slidesToShow
    slidesToScroll = slidesToScroll > 1 ? 1 : slidesToScroll
  } else if (md) {
    slidesToShow = slidesToShow > 2 ? 2 : slidesToShow
    slidesToScroll = slidesToScroll > 2 ? 2 : slidesToScroll
  } else if (lg) {
    slidesToShow = slidesToShow > 3 ? 3 : slidesToShow
    slidesToScroll = slidesToScroll > 3 ? 3 : slidesToScroll
  } else {
    slidesToShow = slidesToShow > 4 ? 4 : slidesToShow
    slidesToScroll = slidesToScroll > 4 ? 4 : slidesToScroll
  }

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    arrows: true,
    nextArrow: <SampleNextArrow />
  }

  return (
    <Box>
      <Slider {...settings}>
        {data.map((item, i) => (
          <ProjectCard key={i} name={item.name} img={item.cover} />
        ))}
      </Slider>
    </Box>
  )
}

export default ProjectSlide
