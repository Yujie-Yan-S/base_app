import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import HomePageCard from '../../home/components/HomePageCard'
import React from 'react'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import { Stack } from '@mui/system'
import Avatar from '@mui/material/Avatar'
import ProjectSlide from './component/ProgramSlide'
import ProgramBanner from './component/ProgramBanner'

const CourseDetails = () => {
  const router = useRouter()
  const { programid } = router.query

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false
  }

  const data = [
    { text: 'asfsadfadsfasf', url: 'https://picsum.photos/400/300' },
    { text: 'asfsadfadsfasf', url: 'https://picsum.photos/400/300' },
    { text: 'asfsadfadsfasf', url: 'https://picsum.photos/400/300' },
    { text: 'asfsadfadsfasf', url: 'https://picsum.photos/400/300' },
    { text: 'asfsadfadsfasf', url: 'https://picsum.photos/400/300' },
    { text: 'asfsadfadsfasf', url: 'https://picsum.photos/400/300' },
    { text: 'asfsadfadsfasf', url: 'https://picsum.photos/400/300' },
    { text: 'asfsadfadsfasf', url: 'https://picsum.photos/400/300' },
    { text: 'asfsadfadsfasf', url: 'https://picsum.photos/400/300' },
    { text: 'asfsadfadsfasf', url: 'https://picsum.photos/400/300' }
  ]

  // 在这里可以根据 courseid 加载相应的课程信息

  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
      sx={{ background: 'linear-gradient(180deg, #cbcbcb 0%, #FFFFFF 25%, #FFFFFF 100%)' }}
    >
      {/* Banner section */}

      <Box sx={{ width: '85%' }}>
        <Box
          sx={{
            maxHeighteight: '470px'
          }}
        >
          <Box>
            <ProgramBanner />
          </Box>
        </Box>
        <Divider sx={{ background: theme => theme.palette.primary.main }} />

        {/* Course section */}
        <Box
          sx={{
            height: '430px'
          }}
        >
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
                {data.map((item, i) => {
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
        <Divider sx={{ background: theme => theme.palette.primary.main }} />

        {/*Project section */}
        <Box sx={{}}>
          <Box display='flex' alignItems={'center'} sx={{ height: '100px' }}>
            <Typography variant='h4' color='primary.main' fontWeight={700} sx={{ marginTop: '1rem' }}>
              Projects
            </Typography>
          </Box>
          <Box sx={{ marginBottom: '2rem' }}>
            <ProjectSlide />
          </Box>
        </Box>

        <Divider sx={{ background: theme => theme.palette.primary.main }} />

        {/*Assesment section */}
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'row'}
          sx={{
            width: '100%',
            height: '450px',
            background: 'white'
          }}
        >
          {/*set the white space*/}
          <Box sx={{ height: '73.333%', width: '85%' }} display={'flex'} alignItems={'center'}>
            {/*left of assesment*/}
            <Box sx={{ width: '67.4%', height: '100%' }} display={'flex'} flexDirection={'column'}>
              <Box sx={{ height: '10%' }} display={'flex'} justifyContent={'start'} alignItems={'center'}>
                <Typography variant={'h3'} color={theme => theme.palette.primary.main}>
                  Assesment
                </Typography>
              </Box>
              <Box
                sx={{ height: '73.5%', width: '89%' }}
                display={'flex'}
                justifyContent={'start'}
                alignItems={'center'}
              >
                <Typography mt={4} sx={{ fontWeight: 600, fontSize: '17px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum
                </Typography>
              </Box>
              <Box sx={{ height: '16.5%' }}>
                <Button variant='contained' sx={{ height: '55px', width: '360px' }}>
                  <Typography color={'white'} variant={'h5'}>
                    Take The Assesment
                  </Typography>
                </Button>
              </Box>
            </Box>

            {/*  right of assesment*/}
            <Box
              sx={{ width: '32.6%', height: '54%' }}
              display={'flex'}
              alignItems={'center'}
              flexDirection={'column'}
              justifyContent={'space-between'}
            >
              <Typography variant={'h4'}>Certified By...</Typography>
              <Box>
                <Stack direction='row' spacing={2}>
                  <Avatar sx={{ height: '100px', width: '100px' }}> </Avatar>
                  <Avatar sx={{ height: '100px', width: '100px' }}> </Avatar>
                  <Avatar sx={{ height: '100px', width: '100px' }}> </Avatar>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default CourseDetails
