import { Box, Button, Card, CardMedia, Grid, Typography, Tabs, Tab } from '@mui/material'
import BasicTabs from './component/BasicTab'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import React, {useEffect, useState} from 'react'
import CustomBreadcrumb from './component/Breadcrumb'

import { useRouter } from 'next/router'
import axios from "axios";

function CourseDetails() {
  const router = useRouter()
  console.log('this is router', router.query)

  const [courseData, setCourseData] = useState()
  let promise;


  useEffect(() => {
    if(router.isReady){

      axios.get(`//api.airobotoedu.com/api/course/get_course_detail?id=${router.query.courseId}`)
        .then((response) => {
          console.log(response.data.data)

          const courseDataTemp = {
            title: response.data.data.name,
            instructor: response.data.data.tutor,
            instructorDetail: response.data.data.description,
            about: response.data.data.description,
            syllabus: response.data.data.lessonList,
            enrolled: 700 // 你可以根据实际数据设置这个值
          };
          console.log('this is course data', courseData)
          setCourseData(courseDataTemp)
        })
        .catch((error) => {
          // 处理请求错误
          console.error('请求出错：', error);
        });
    }


  }, [router]);




  return (
    courseData? <Box sx={{ height: '100%' }}>
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
                    image='https://picsum.photos/id/237/200/300'
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
              <Grid item md={7.5} mr={8}>
                <BasicTabs about={courseData.about} syllabus={courseData.syllabus} />
              </Grid>
              {/* right section */}
              <Grid item md={4}>
                <Typography variant={"h5"} height={'49px'} fontWeight={'700'} display={'flex'} alignItems={'center'}>
                  Instructor{' '}
                </Typography>
                <Divider sx={{ background: theme => theme.palette.primary.main }} />

                <Box height={'90%'}>
                  <Box height={'28.8%'} display={'flex'} justifyContent={'start'} alignItems={'center'}>
                    <Avatar sx={{mt:6,  mr: 6, height: '50px', width: '50px' }}> </Avatar>
                    <Typography color={'black'} fontWeight={'600'} variant={'h6'}>
                      {courseData.instructor.lastName}
                    </Typography>
                  </Box>
                  <Typography fontWeight={'500'} fontSize={'0.7rem'} color={'black'} mt={5}>
                    {courseData.instructorDetail}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>:<Typography>loading...</Typography>

  )
}

CourseDetails.authGuard = false

export default CourseDetails
