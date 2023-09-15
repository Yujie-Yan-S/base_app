import { Box, Button, Card, CardMedia, Grid, Typography, Tabs, Tab } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import React, {useEffect} from 'react'
import CustomBreadcrumb from '../[courseId]/component/Breadcrumb'
import CourseContentTab from '../list/component/CourseContentTab'
import CourseBannerSlide from './component/CoureBannerSlide'
import {router} from "next/client";
import {useDispatch, useSelector} from "react-redux";
import {fetchCourseById} from "../../../store/features/courses_list/coursesSlice";

const UserCoursePage = () => {

  const dispatch = useDispatch();

  const courseData = useSelector(state=>state.courses.coursedetails)

  // if(courseData){
  //   console.log(courseData)
  // }


  useEffect(() => {
    if(router.isReady){
      // console.log('router is ',router.query.userId)
      dispatch(fetchCourseById(router.query.userId));

    }
  }, []);

  // const courseData = {
  //   title: 'Lingke',
  //   instructor: 'Dr. Max Li',
  //   instructorDetail:
  //     'Demonstration text: Guangzhou Lingke Network Technology Co., Ltd. was established in 2015 by a number of industry elites who have long been engaged in online education and Internet financial system technical services. In the context of the Internet and big data era, integrating the advantages of Internet technology and online education, creating an online education platform, saving R&D costs and time for enterprises, and helping institutions and lecturers build their own online education brands.',
  //   about:
  //     'Demonstration text: Guangzhou Lingke Network Technology Co., Ltd. was established in 2015 by a number of industry elites who have long been engaged in online education and Internet financial system technical services. In the context of the Internet and big data era, integrating the advantages of Internet technology and online education, creating an online education platform, saving R&D costs and time for enterprises, and helping institutions and lecturers build their own online education brands. Its products include "Leading Course Education Cloud", "Leading Course Education System" and "Dragon Fruit Payment System". Education Cloud mainly provides platform operation services and corresponding technical services. The education system mainly provides online education systems and corresponding technical services. The payment system mainly provides the sales of Internet aggregation payment systems and corresponding technical services.Guangzhou Lingke Network Technology Co., Ltd. was established in 2015 by a number of industry elites who have long been engaged in online education and Internet financial system technical services. In the context of the Internet and big data era, integrating the advantages of Internet technology and online education, creating an online education platform, saving R&D costs and time for enterprises, and helping institutions and lecturers build their own online education brands.',
  //   syllabus: [
  //     'adsfasfadsf as asdfasdfas asdfas d fasdf asdfasfasdf asd asdfasf asdf asdf asd asdfasdf asd adsf asdfasd dfa adsd as asdfadsfdasf asdfasdfasdfadsf asd adsadsfsda sdf adsfsfasdfasdf asdfasdfas',
  //     'adsfasfadsf as asdfasdfas asdfas d fasdf asdfasfasdf asd asdfasf asdf asdf asd asdfasdf asd adsf asdfasd dfa adsd as asdfadsfdasf asdfasdfasdfadsf asd adsadsfsda sdf adsfsfasdfasdf asdfasdfas',
  //     'adsfasfadsf as asdfasdfas asdfas d fasdf asdfasfasdf asd asdfasf asdf asdf asd asdfasdf asd adsf asdfasd dfa adsd as asdfadsfdasf asdfasdfasdfadsf asd adsadsfsda sdf adsfsfasdfasdf asdfasdfas',
  //     'adsfasfadsf as asdfasdfas asdfas d fasdf asdfasfasdf asd asdfasf asdf asdf asd asdfasdf asd adsf asdfasd dfa adsd as asdfadsfdasf asdfasdfasdfadsf asd adsadsfsda sdf adsfsfasdfasdf asdfasdfas',
  //     'adsfasfadsf as asdfasdfas asdfas d fasdf asdfasfasdf asd asdfasf asdf asdf asd asdfasdf asd adsf asdfasd dfa adsd as asdfadsfdasf asdfasdfasdfadsf asd adsadsfsda sdf adsfsfasdfasdf asdfasdfas',
  //     'adsfasfadsf as asdfasdfas asdfas d fasdf asdfasfasdf asd asdfasf asdf asdf asd asdfasdf asd adsf asdfasd dfa adsd as asdfadsfdasf asdfasdfasdfadsf asd adsadsfsda sdf adsfsfasdfasdf asdfasdfas',
  //     'adsfasfadsf as asdfasdfas asdfas d fasdf asdfasfasdf asd asdfasf asdf asdf asd asdfasdf asd adsf asdfasd dfa adsd as asdfadsfdasf asdfasdfasdfadsf asd adsadsfsda sdf adsfsfasdfasdf asdfasdfas',
  //     'adsfasfadsf as asdfasdfas asdfas d fasdf asdfasfasdf asd asdfasf asdf asdf asd asdfasdf asd adsf asdfasd dfa adsd as asdfadsfdasf asdfasdfasdfadsf asd adsadsfsda sdf adsfsfasdfasdf asdfasdfas',
  //     'adsfasfadsf as asdfasdfas asdfas d fasdf asdfasfasdf asd asdfasf asdf asdf asd asdfasdf asd adsf asdfasd dfa adsd as asdfadsfdasf asdfasdfasdfadsf asd adsadsfsda sdf adsfsfasdfasdf asdfasdfas'
  //   ],
  //   enrolled: 700
  // }

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
      {courseData &&
      <Box>
        <Box sx={{ mr: { xs: 1, sm: 2, md: 20, lg: 20 }, ml: { xs: 1, sm: 2, md: 20, lg: 20 }, mb: '2rem' }}>
          <Grid container>
            {/* left section */}
            <Grid item md={8}>
              <CourseContentTab about={courseData.data.description} syllabus={courseData.data.lessonList} grades={courseData.data.lessonList} />
            </Grid>
            {/* right section */}
            <Grid item md={4}>
              <Typography height={'49px'} fontWeight={'700'} fontSize={'20px'} display={'flex'} alignItems={'center'}>
                Instructor
              </Typography>
              <Divider sx={{ background: theme => theme.palette.primary.main }} />

              <Box overflow={"hidden"}>
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
      }
    </Box>
  )
}

UserCoursePage.authGuard = false

export default UserCoursePage
