import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ProjectCard from './ProgramCard'
import { Box } from '@mui/material'

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div className={className} style={{ ...style, display: 'block', color: 'blue' }} onClick={onClick}>
      <ArrowForwardIosIcon />
    </div>
  )
}

const ProjectSlide = () => {
  const settings = {
    className: 'center',
    centerPadding: '60px',
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: true,
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
  const data = [
    { src: 'images/programs/reptile.jpeg' },
    { src: 'images/programs/dogs.jpeg' },
    { src: 'images/programs/elephant.jpeg' },
    { src: 'images/programs/fox.jpeg' },
    { src: 'images/programs/deer.jpeg' },
    { src: 'images/programs/tiger.jpeg' }
  ]
  return (
    <Box sx={{ border: '2px solid red' }}>
      <Slider {...settings}>
        {data.map((item, i) => (
          <ProjectCard key={i} img={item} />
        ))}
      </Slider>
    </Box>
  )
}

export default ProjectSlide
