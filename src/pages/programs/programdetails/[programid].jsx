import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import HomePageCard from '../../home/components/HomePageCard'
import React, { useEffect } from 'react'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import { Stack } from '@mui/system'
import Avatar from '@mui/material/Avatar'
import ProjectSlide from './component/ProjectSlide'
import ProgramBanner from './component/ProgramBanner'
import useMediaQuery from '@mui/material/useMediaQuery'
import ProgramCourses from './component/ProgramCourses'
import ProgramAssesment from './component/ProgramAssesment'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProgramDetail } from 'src/store/features/program_details/programDetailSlice'
import {fetchCourses} from "../../../store/features/courses_list/coursesSlice";

const ProgramDetails = () => {
  const router = useRouter()
  const id = router.query.programid
  console.log('id is ', id)


  const dispatch = useDispatch()
  const { programDetailData ,status,error} = useSelector(state => state.programDetail)

  const { courses, status1, error1} = useSelector(state => state.courses)




  const pathname = window.location.pathname

  const parts = pathname.split('/')
  const programId = parts[parts.length - 2]

  useEffect(() => {
    dispatch(fetchProgramDetail(programId))
  }, [dispatch])


  useEffect(()=>{
    if (id) {
      dispatch(fetchCourses({ id, page: 1, num: 2 }));
    }

  }, [dispatch, id])



  if (status === 'loading') {
    return <box>Loading...</box>
  }

  if (status === 'failed') {
    return <box>Error: {error}</box>
  }


  const data = courses?courses.data:null


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
            <ProgramBanner name={programDetailData.name} description={programDetailData.description} />
          </Box>
        </Box>
        <Divider sx={{ background: theme => theme.palette.primary.main }} />

        {/* Course section */}
        <ProgramCourses data={data} />
        <Divider sx={{ background: theme => theme.palette.primary.main }} />

        {/*Project section */}
        <Box>
          <Box display='flex' alignItems={'center'} sx={{ height: '100px' }}>
            <Typography variant='h4' color='primary.main' fontWeight={700} sx={{ marginTop: '1rem' }}>
              Projects
            </Typography>
          </Box>
          <Box display={'flex'} justifyContent={'center'} sx={{ marginBottom: '2rem' }}>
            {/* if I add this line, we can match the gap between cards */}
            <Box width={'106%'}>
              <ProjectSlide />
            </Box>
          </Box>
        </Box>

        <Divider sx={{ background: theme => theme.palette.primary.main }} />

        {/*Assesment section */}
        <ProgramAssesment />
      </Box>
    </Box>
  )
}

export default ProgramDetails
