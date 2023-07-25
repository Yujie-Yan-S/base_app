// ** MUI Imports
import { useEffect } from 'react'
import ClassCard from './component/ClassCard'
import { Box, TextField, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPrograms } from 'src/store/features/program_page_list/programSlice'

const Programs = () => {
  const classData = [
    {
      id: 100,
      title: 'Machine Learning Engineer',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellat quas voluptas sed eaque suscipit dolor, laboriosam aliquid vel. Necessitatibus dolorum id odit sit inventore facilis magni error iste aperiam?',
      tag: ['AI', 'ML', 'NPL'],
      titleTag: 'Autonomous'
    },
    {
      id: 101,
      title: 'Machine Learning Engineer',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellat quas voluptas sed eaque suscipit dolor, laboriosam aliquid vel. Necessitatibus dolorum id odit sit inventore facilis magni error iste aperiam?',
      tag: ['AI', 'ML', 'NPL'],
      titleTag: 'Autonomous'
    },
    {
      id: 102,
      title: 'Machine Learning Engineer',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellat quas voluptas sed eaque suscipit dolor, laboriosam aliquid vel. Necessitatibus dolorum id odit sit inventore facilis magni error iste aperiam?',
      tag: ['AI', 'ML', 'NPL'],
      titleTag: 'Autonomous'
    }
  ]
  const dispatch = useDispatch()
  const { programs, status, error } = useSelector(state => state.programs)

  useEffect(() => {
    dispatch(fetchPrograms())
  }, [])

  if (status === 'loading') {
    return <box>Loading...</box>
  }

  if (status === 'failed') {
    return <box>Error: {error}</box>
  }

  const classList = programs?.map((item, index) => {
    const backgroundColor =
      index % 2 === 0 ? 'linear-gradient(to right, #787878, #FFFFFF)' : 'linear-gradient(to right, #CACACA, #FEFEFE)'

    return (
      <ClassCard
        key={item.id}
        title={item.title}
        description={item.des}
        tag={item.tag}
        titleTag={item.titleTag}
        background={backgroundColor}
      />
    )
  })

  return (
    <Box>
      <Box
        minHeight={'100px'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        marginTop='2rem'
        marginBottom='2rem'
      >
        <Typography variant={'h5'} color={theme => theme.palette.primary.main}>
          Our programs
        </Typography>

        <TextField
          label='search'
          id='fullWidth'
          sx={{ height: '60%', width: '50%', borderRadius: '10px', backgroundColor: '#f0f0f0' }}
        />
      </Box>

      <Box>{classList}</Box>
      <Box minHeight={'100px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Typography variant={'h5'} color={theme => theme.palette.primary.main}>
          More course
        </Typography>
      </Box>
    </Box>
  )
}

export default Programs
