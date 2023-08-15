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

const ProgramDetails = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { programDetail, status, error } = useSelector(state => state.programDetail)

  console.log(programDetail)

  const pathname = window.location.pathname
  console.log(pathname)
  const parts = pathname.split('/')
  const programId = parts[parts.length - 2]

  useEffect(() => {
    dispatch(fetchProgramDetail(programId))
  }, [])

  if (status === 'loading') {
    return <box>Loading...</box>
  }

  if (status === 'failed') {
    return <box>Error: {error}</box>
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
            <ProgramBanner name={programDetail.name} description={programDetail.description} />
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
