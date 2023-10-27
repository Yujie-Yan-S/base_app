import { Box, Button, Card, CardMedia, Grid, Typography, Tabs, Tab } from '@mui/material'
import BasicTabs from './component/BasicTab'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import React from 'react'
import CustomBreadcrumb from './component/Breadcrumb'

import { useRouter } from 'next/router'

function CourseDetails() {
  const router = useRouter()
  console.log('this is router', router.query)

  const courseData = {
    title: 'Lingke',
    instructor: 'Dr. Max Li',
    instructorDetail:
      'Demonstration text: Guangzhou Lingke Network Technology Co., Ltd. was established in 2015 by a number of industry elites who have long been engaged in online education and Internet financial system technical services. In the context of the Internet and big data era, integrating the advantages of Internet technology and online education, creating an online education platform, saving R&D costs and time for enterprises, and helping institutions and lecturers build their own online education brands.',
    about:
      'Demonstration text: Guangzhou Lingke Network Technology Co., Ltd. was established in 2015 by a number of industry elites who have long been engaged in online education and Internet financial system technical services. In the context of the Internet and big data era, integrating the advantages of Internet technology and online education, creating an online education platform, saving R&D costs and time for enterprises, and helping institutions and lecturers build their own online education brands. Its products include "Leading Course Education Cloud", "Leading Course Education System" and "Dragon Fruit Payment System". Education Cloud mainly provides platform operation services and corresponding technical services. The education system mainly provides online education systems and corresponding technical services. The payment system mainly provides the sales of Internet aggregation payment systems and corresponding technical services.Guangzhou Lingke Network Technology Co., Ltd. was established in 2015 by a number of industry elites who have long been engaged in online education and Internet financial system technical services. In the context of the Internet and big data era, integrating the advantages of Internet technology and online education, creating an online education platform, saving R&D costs and time for enterprises, and helping institutions and lecturers build their own online education brands.',
    syllabus: [
      'adsfasfadsf as asdfasdfas asdfas d fasdf asdfasfasdf asd asdfasf asdf asdf asd asdfasdf asd adsf asdfasd dfa adsd as asdfadsfdasf asdfasdfasdfadsf asd adsadsfsda sdf adsfsfasdfasdf asdfasdfas',
      'adsfasfadsf as asdfasdfas asdfas d fasdf asdfasfasdf asd asdfasf asdf asdf asd asdfasdf asd adsf asdfasd dfa adsd as asdfadsfdasf asdfasdfasdfadsf asd adsadsfsda sdf adsfsfasdfasdf asdfasdfas',
      'adsfasfadsf as asdfasdfas asdfas d fasdf asdfasfasdf asd asdfasf asdf asdf asd asdfasdf asd adsf asdfasd dfa adsd as asdfadsfdasf asdfasdfasdfadsf asd adsadsfsda sdf adsfsfasdfasdf asdfasdfas',
      'adsfasfadsf as asdfasdfas asdfas d fasdf asdfasfasdf asd asdfasf asdf asdf asd asdfasdf asd adsf asdfasd dfa adsd as asdfadsfdasf asdfasdfasdfadsf asd adsadsfsda sdf adsfsfasdfasdf asdfasdfas',
      'adsfasfadsf as asdfasdfas asdfas d fasdf asdfasfasdf asd asdfasf asdf asdf asd asdfasdf asd adsf asdfasd dfa adsd as asdfadsfdasf asdfasdfasdfadsf asd adsadsfsda sdf adsfsfasdfasdf asdfasdfas',
      'adsfasfadsf as asdfasdfas asdfas d fasdf asdfasfasdf asd asdfasf asdf asdf asd asdfasdf asd adsf asdfasd dfa adsd as asdfadsfdasf asdfasdfasdfadsf asd adsadsfsda sdf adsfsfasdfasdf asdfasdfas',
      'adsfasfadsf as asdfasdfas asdfas d fasdf asdfasfasdf asd asdfasf asdf asdf asd asdfasdf asd adsf asdfasd dfa adsd as asdfadsfdasf asdfasdfasdfadsf asd adsadsfsda sdf adsfsfasdfasdf asdfasdfas',
      'adsfasfadsf as asdfasdfas asdfas d fasdf asdfasfasdf asd asdfasf asdf asdf asd asdfasdf asd adsf asdfasd dfa adsd as asdfadsfdasf asdfasdfasdfadsf asd adsadsfsda sdf adsfsfasdfasdf asdfasdfas',
      'adsfasfadsf as asdfasdfas asdfas d fasdf asdfasfasdf asd asdfasf asdf asdf asd asdfasdf asd adsf asdfasd dfa adsd as asdfadsfdasf asdfasdfasdfadsf asd adsadsfsda sdf adsfsfasdfasdf asdfasdfas'
    ],
    enrolled: 700
  }

  return (
    <Box sx={{ height: '100%' }}>
      {/* Upper section  */}
      <Box sx={{ background: theme => theme.palette.primary.main }}>
        <Box
          sx={{
            mr: { xs: 1, sm: 2, md: 20, lg: 20 },
            ml: { xs: 1, sm: 2, md: 20, lg: 20 },
            mb: '1rem',
            pb: '2.5rem',
            pt: '1rem'
          }}
        >
          {/* Course title */}
          <Box sx={{ marginBottom: '1.5rem', color: 'white' }}>
            <CustomBreadcrumb />
          </Box>
          {/* Class banner + detail*/}
          <Grid container sx={{ background: 'prime.main', color: 'white' }}>
            {/* left section banner img */}
            <Grid item md={5.8}>
              <Card
                sx={{
                  width: { xs: '300px', md: '400px', lg: '430px' },
                  height: { xs: '171px', md: '228px', lg: '246px' },
                  borderRadius: '0'
                }}
              >
                <CardMedia
                  component='img'
                  alt='course img'
                  image='https://picsum.photos/200/300'
                  sx={{ opacity: '0.4', '&:hover': { opacity: 1, cursor: 'pointer' } }}
                />
              </Card>
            </Grid>

            {/* Right section */}
            <Grid item md={6.2}>
              {/* left details */}
              <Grid container md={12} sx={{ height: '100%' }}>
                {/* title, professor and purchase button */}
                <Grid item md={6} container direction={'column'}>
                  <Grid item md={3} sx={{ mt: 0.5 }}>
                    <Typography variant='h5' color='white'>
                      Lingke Educational system
                    </Typography>
                  </Grid>
                  <Grid item md={3} container direction={'row'} sx={{ mt: 3 }}>
                    <Avatar sx={{ mr: 3, height: '30px', width: '30px' }} />
                    <Typography variant='h7'>Dr.Max Li</Typography>
                  </Grid>
                  <Grid item md={4.7} display={'flex'} alignItems={'flex-end'}>
                    <Button variant='contained' sx={{ background: 'white', width: '150px', height: '45%' }}>
                      <Typography variant='h7' color='primary.main'>
                        Purchase now
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
                {/* Enrolled number  */}
                <Grid item md={6}>
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'flex-end'}
                    alignItems={'flex-start'}
                    sx={{ height: '100%' }}
                  >
                    <Typography variant='h7'>740 already enrolled</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Lower Section Class detial  */}
      <Box>
        <Box sx={{ mr: { xs: 1, sm: 2, md: 20, lg: 20 }, ml: { xs: 1, sm: 2, md: 20, lg: 20 }, mb: '2rem' }}>
          <Grid container md={12}>
            {/* left section */}
            <Grid item md={8}>
              <BasicTabs about={courseData.about} syllabus={courseData.syllabus} />
            </Grid>
            {/* right section */}
            <Grid item md={4}>
              <Typography height={'49px'} fontWeight={'700'} fontSize={'20px'} display={'flex'} alignItems={'center'}>
                Instructor{' '}
              </Typography>
              <Divider sx={{ background: theme => theme.palette.primary.main }} />

              <Box height={'90%'}>
                <Box height={'28.8%'} display={'flex'} justifyContent={'start'} alignItems={'center'}>
                  <Avatar sx={{ mr: 6, height: '50px', width: '50px' }}> </Avatar>
                  <Typography color={'black'} fontWeight={'600'} variant={'h6'}>
                    {courseData.instructor}
                  </Typography>
                </Box>
                <Typography fontWeight={'500'} fontSize={'15px'} color={'black'}>
                  {courseData.instructorDetail}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

CourseDetails.authGuard = false

export default CourseDetails
