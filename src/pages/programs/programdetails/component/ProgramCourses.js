import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Slider from 'react-slick'
import HomePageCard from '../../../home/components/HomePageCard'
import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'

const ProgramCourses = ({ data }) => {
  // console.log('this is the passed data')
  // console.log(data)

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
    arrows: false
  }

  return (
    <Box>
      <Box
        sx={{
          height: '90px'
        }}
        display={'flex'}
        justifyContent={'flex-start'}
        alignItems={'flex-end'}
      >
        <Typography color={theme => theme.palette.primary.main} variant={'h3'} sx={{ fontWeight: 600 }}>
          Courses
        </Typography>
      </Box>
      <Box
        sx={{
          height: '335px'
        }}
        display={'flex'}
        justifyContent={'center'}
      >
        <Box pt={'59px'} width={'106%'}>
          <Slider {...settings}>
            {data &&
              data.map((item, i) => {
                return (
                  <Box key={i} pb={3} display={'flex !important'} justifyContent={'center'}>
                    <HomePageCard text={item.description} image={item.cover} width={'250px'} />
                  </Box>
                )
              })}
          </Slider>
        </Box>
      </Box>
    </Box>
  )
}

export default ProgramCourses
