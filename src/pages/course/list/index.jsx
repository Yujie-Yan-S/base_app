import { Box, Grid, Chip, Typography, Pagination, PaginationItem, Divider } from '@mui/material'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from 'src/@core/components/spinner'
import { fetchCourseBySearch } from 'src/store/features/course_by_search/CourseSearchSlice'
import CourseCard from './component/CourseCard'
import querystring from 'querystring'
import pagination from 'src/configs/pagination'

const Courses = () => {
  const { status, totalPage, courseListFromSearch } = useSelector(state => state.courseBySearch)
  const dispatch = useDispatch()

  const router = useRouter()
  const queryParams = router.query
  const page = parseInt(queryParams.pageNum, 10)

  useEffect(() => {
    if (router.isReady) {
      const currentQuery = querystring.stringify(queryParams)
      dispatch(fetchCourseBySearch(currentQuery))
    }
  }, [router.isReady])

  if (status === 'loading') {
    return (
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100vh'}>
        <Spinner />
      </Box>
    )
  }

  const filter1 = ['cloud', 'Artiifical Intelligence', 'Autonomous Driving', 'Electric Vehicles']
  const filter2 = ['Free', 'Paid']

  const courseList = courseListFromSearch.map((item, index) => {
    return (
      <Grid item key={index} md={3}>
        <CourseCard key={index} img={item.cover} title={item.name} tags={item.tag} />
      </Grid>
    )
  })

  const handleFilterClick = tag => {
    const filterQuery = tag
      ? { keyWord: tag, pageNum: 0, pageSize: 12 }
      : { pageNum: 0, pageSize: pagination.coursePageSize }

    const filterQueryString = querystring.stringify(filterQuery)
    const newUrl = `/course/list/?${filterQueryString}`
    router.push(newUrl)
  }

  return (
    <Box display={'flex'} justifyContent={'center'}>
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} width={'90%'}>
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} mt={10} ml={7}>
          <Box display='flex' justifyContent='flex-start' gap={6} overflow='hidden' flexWrap={'wrap'}>
            <Typography variant={'h6'} color={'primary.main'} onClick={handleFilterClick} style={{ cursor: 'pointer' }}>
              All
            </Typography>
            {filter1.map(tag => (
              <Chip
                key={tag}
                label={tag}
                variant='outlined'
                onClick={() => handleFilterClick(tag)}
                sx={{
                  background: 'none', // Remove background color
                  border: 'none', // Remove outline
                  color: 'primary.text',
                  fontWeight: 650
                }}
              />
            ))}
          </Box>
          <Box display='flex' justifyContent='flex-start' gap={6} overflow='hidden' sx={{ marginBottom: '1.1rem' }}>
            <Typography variant={'h6'} color={'primary.main'}>
              All
            </Typography>
            {filter2.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                sx={{
                  background: 'none',
                  border: 'none',
                  color: 'primary.text',
                  fontWeight: 650
                }}
                onClick={() => handleTagClick(tag)}
              />
            ))}
          </Box>
        </Box>

        <Divider sx={{ backgroundColor: theme => theme.palette.primary.main, margin: '2rem' }} />

        <Box display={'flex'} justifyContent={'center'} mt={3}>
          <Grid container spacing={10} display={'flex'} justifyContent={'center'}>
            {courseList}
          </Grid>
        </Box>

        <Box display={'flex'} justifyContent={'center'} mt={10} mb={10}>
          <Pagination
            page={page + 1}
            count={totalPage}
            renderItem={item => (
              <PaginationItem
                component={Link}
                href={`/course/list/?keyWord=${queryParams.keyWord ? queryParams.keyWord : ''}&pageNum=${
                  item.page - 1
                }&pageSize=12`}
                {...item}
              />
            )}
          />
        </Box>
      </Box>
    </Box>
  )
}

Courses.authGuard = false

export default Courses
