import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import HomePageCard from "../../../home/components/HomePageCard";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";




const ProgramCourses = ({data})=>{
  console.log('this is the passed data')
  console.log(data)


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
            {data && data.map((item, i) => {
              return (
                <Box key={i} pb={3} display={'flex !important'} justifyContent={'center'}>
                  <HomePageCard text={item.text} image={item.url} />
                </Box>
              )
            })}
          </Slider>
        </Box>
      </Box>
    </Box>
  )
}

export default ProgramCourses;
