// ** MUI Imports
import Grid from '@mui/material/Grid'
import ClassCard from './component/ClassCard'
import { Box, TextField, Typography } from '@mui/material'
import { margin } from '@mui/system'

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

  const classList = classData.map((item, index) => {
    const backgroundColor =
      index % 2 === 0 ? 'linear-gradient(to right, #787878, #FFFFFF)' : 'linear-gradient(to right, #CACACA, #FEFEFE)'

    return (
      <ClassCard
        key={item.id}
        title={item.title}
        description={item.description}
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
