import { Box, Button, Card, CardMedia, Grid, Typography, Tabs, Tab } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import React, { useEffect } from 'react'
import CustomBreadcrumb from '../[courseId]/component/Breadcrumb'
import CourseContentTab from '../list/component/CourseContentTab'
import CourseBannerSlide from './component/CoureBannerSlide'
import { router } from 'next/client'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourseById } from '../../../store/features/courses_list/coursesSlice'

const UserCoursePage = () => {
  const dispatch = useDispatch()

  const courseData = useSelector(state => state.courses.coursedetails)

  // if(courseData){
  //   console.log(courseData)
  // }

  useEffect(() => {
    if (router.isReady) {
      dispatch(fetchCourseById(router.query.userId))
    }
  }, [router])

  const imgData = ['https://picsum.photos/441/229', 'https://picsum.photos/441/229']

  return (
    <Box sx={{ height: '100%' }}>
      {/* Upper section  */}
      <Box sx={{ background: theme => theme.palette.primary.main }}>
        <Box>
          {/* Course title */}
          <Box sx={{ marginBottom: '1.5rem', color: 'white' }}>
            <CustomBreadcrumb />
          </Box>

          <Box display={'flex'} justifyContent={'center'} sx={{ background: 'prime.main', color: 'white' }}>
            {/* banner img */}
            <CourseBannerSlide img={imgData} />
          </Box>
        </Box>
      </Box>

      {/* Lower Section Class detial  */}
      {courseData && (
        <Box>
          <Box sx={{ mr: { xs: 1, sm: 2, md: 20, lg: 20 }, ml: { xs: 1, sm: 2, md: 20, lg: 20 }, mb: '2rem' }}>
            <Grid container>
              {/* left section */}
              <Grid item md={8}>
                <CourseContentTab
                  about={courseData.data.description}
                  syllabus={courseData.data.lessonList}
                  grades={courseData.data.lessonList}
                />
              </Grid>
              {/* right section */}
              <Grid item md={4}>
                <Typography height={'49px'} fontWeight={'700'} fontSize={'20px'} display={'flex'} alignItems={'center'}>
                  Instructor
                </Typography>
                <Divider sx={{ background: theme => theme.palette.primary.main }} />

                <Box overflow={'hidden'}>
                  <Box pt={3} pb={3} height={'28.8%'} display={'flex'} justifyContent={'start'} alignItems={'center'}>
                    <Avatar sx={{ mr: 6, height: '50px', width: '50px' }}> </Avatar>
                    <Typography color={'black'} fontWeight={'600'} variant={'h6'}>
                      {courseData.data.tutor.firstName}
                    </Typography>
                  </Box>
                  <Typography fontWeight={'500'} fontSize={'15px'} color={'black'}>
                    {courseData.data.description}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      )}
    </Box>
  )
}

UserCoursePage.authGuard = true

export default UserCoursePage
