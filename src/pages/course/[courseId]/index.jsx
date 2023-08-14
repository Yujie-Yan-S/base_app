import { Box, Button, Card, CardMedia, Grid, Typography, Tabs, Tab } from '@mui/material'
import { useState } from 'react'
import BasicTabs from './component/BasicTab'

export default function CourseDetails() {
  const [courseDetails, setCourseDetials] = useState('About')

  const courseData = {
    title: 'Lingke',
    instructor: 'Dr. Max Li',
    instructorDetail:
      'Demonstration text: Guangzhou Lingke Network Technology Co., Ltd. was established in 2015 by a number of industry elites who have long been engaged in online education and Internet financial system technical services. In the context of the Internet and big data era, integrating the advantages of Internet technology and online education, creating an online education platform, saving R&D costs and time for enterprises, and helping institutions and lecturers build their own online education brands.',
    about:
      'Demonstration text: Guangzhou Lingke Network Technology Co., Ltd. was established in 2015 by a number of industry elites who have long been engaged in online education and Internet financial system technical services. In the context of the Internet and big data era, integrating the advantages of Internet technology and online education, creating an online education platform, saving R&D costs and time for enterprises, and helping institutions and lecturers build their own online education brands. Its products include "Leading Course Education Cloud", "Leading Course Education System" and "Dragon Fruit Payment System". Education Cloud mainly provides platform operation services and corresponding technical services. The education system mainly provides online education systems and corresponding technical services. The payment system mainly provides the sales of Internet aggregation payment systems and corresponding technical services.Guangzhou Lingke Network Technology Co., Ltd. was established in 2015 by a number of industry elites who have long been engaged in online education and Internet financial system technical services. In the context of the Internet and big data era, integrating the advantages of Internet technology and online education, creating an online education platform, saving R&D costs and time for enterprises, and helping institutions and lecturers build their own online education brands.',
    syllabus: 'lesson1',
    enrolled: 700
  }

  const handleChange = () => {
    setCourseDetials(courseDetails === 'About' ? 'Syllabus' : 'About')
  }

  return (
    <Box sx={{ border: '2px solid purple', height: '100%' }}>
      {/* Upper section  */}
      <Box sx={{ border: '2px solid red', background: theme => theme.palette.primary.main }}>
        <Box sx={{ marginLeft: '2rem', marginBottom: '2rem' }}>
          {/* Course title */}
          <Box sx={{ border: '2px solid red', margin: '2rem 0 1.5rem 0' }}>
            <Typography variant='h7' color='white'>
              Course&nbsp;&nbsp;&nbsp;&gt; &nbsp;&nbsp;&nbsp;&nbsp;Lingke Education System{' '}
            </Typography>
          </Box>
          {/* Class banner + detail*/}
          <Grid container md={12} sx={{ background: 'prime.main', color: 'white' }}>
            {/* left banner img */}
            <Grid item md={6}>
              <Box>
                <Card sx={{ width: '90%' }}>
                  <CardMedia
                    component='img'
                    alt='project img'
                    height='210'
                    image='https://picsum.photos/200/300'
                    sx={{ opacity: '0.4', '&:hover': { opacity: 1, cursor: 'pointer' } }}
                  />
                </Card>
              </Box>
            </Grid>

            {/* Right section */}
            <Grid item md={6} sx={{ border: '2px solid blue' }}>
              {/* left details */}
              <Grid container md={12} sx={{ border: '2px solid yellow', height: '100%' }}>
                {/* title, professor and purchase button */}
                <Grid item md={7} container direction={'column'} sx={{ border: '2px solid green' }}>
                  <Grid item md={5}>
                    <Typography variant='h5' color='white'>
                      Lingke Educational system
                    </Typography>
                  </Grid>
                  <Grid item md={3}>
                    <Typography variant='h7'>Dr.Max Li</Typography>
                  </Grid>
                  <Grid item md={4}>
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'flex-end'} sx={{ height: '100%' }}>
                      <Button variant='contained' sx={{ background: 'white', width: '45%' }}>
                        <Typography variant='h7' color='primary.main'>
                          Purchase now
                        </Typography>
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
                {/* Enrolled number  */}
                <Grid item md={5}>
                  <Box display={'flex'} flexDirection={'column'} justifyContent={'flex-end'} sx={{ height: '100%' }}>
                    <Typography variant='h7'>740 already enrolled</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Lower Section Class detial  */}
      <Box sx={{ height: '100%', border: '2px solid yellow' }}>
        <Box sx={{ margin: '2rem ' }}>
          <Grid container md={12}>
            {/* left section */}
            <Grid item md={8} sx={{ border: '2px solid red' }}>
              <BasicTabs about={courseData.about} syllabus={courseData.syllabus} />
            </Grid>
            {/* right section */}
            <Grid item md={4} sx={{ border: '2px solid blue' }}>
              <Typography>Instructor</Typography>
              <Typography>Dr.Max Li</Typography>
              <Typography>{courseData.instructorDetail}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}
