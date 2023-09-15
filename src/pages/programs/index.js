// ** MUI Imports
import { useEffect, useState } from 'react'
import ProgramCard from './component/ProgramCard'
import { Box, TextField, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import Chip from '@mui/material/Chip'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPrograms } from 'src/store/features/program_page_list/programSlice'

const Programs = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()
  const { programs, status, error } = useSelector(state => state.programs)

  useEffect(() => {
    dispatch(fetchPrograms())
  }, [dispatch])
  if (status === 'loading') {
    return <box>Loading...</box>
  }

  if (status === 'failed') {
    return <box>Error: {error}</box>
  }

  // Top category tag
  const tags = ['tag1', 'tag2', 'tag3', 'tag4', 'tag5']

  const tempProjectTage = ['Machine learning', 'Data Science', 'XXXX', 'XXXXXX']
  const handleChipClick = () => {}

  const programList = programs?.map((item, index) => {
    const backgroundColor =
      index % 2 === 0 ? 'linear-gradient(to right, #787878, #FFFFFF)' : 'linear-gradient(to right, #CACACA, #FEFEFE)'

    return (
      <ProgramCard
        id={item.id}
        key={item.id}
        title={item.name}
        description={item.description}
        tag={item.tag ? item.tag : tempProjectTage}
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
        <Typography variant={'h3'}>Our programs</Typography>
        <Divider sx={{ backgroundColor: theme => theme.palette.primary.main, margin: '2rem', width: '70%' }} />

        <TextField
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          InputProps={{
            sx: {
              placeHolder: 'Search',
              borderRadius: '25px',
              height: '2rem'
            },
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            )
          }}
          id='fullWidth'
          sx={{ width: '70%', borderRadius: '25px', backgroundColor: '#f0f0f0' }}
        />

        <Box display='flex' flexDirection='column' sx={{ marginTop: '1rem', width: '70%' }}>
          <Box display='flex' justifyContent='flex-start' gap={8} overflow='hidden'>
            <Typography variant={'h6'} color={theme => theme.palette.primary.main}>
              All
            </Typography>
            {tags.map(tag => (
              <Chip
                key={tag}
                label={tag}
                variant='outlined'
                onClick={() => handleTagClick(tag)}
                sx={{
                  background: 'none', // Remove background color
                  border: 'none', // Remove outline
                  color: 'inherit' // Use the default text color
                }}
              />
            ))}
          </Box>
          <Box display='flex' justifyContent='flex-start' gap={8} overflow='hidden' sx={{ marginBottom: '1rem' }}>
            <Typography variant={'h6'} color={theme => theme.palette.primary.main}>
              All{' '}
            </Typography>
            {tags.map(tag => (
              <Chip
                key={tag}
                label={tag}
                sx={{
                  background: 'none', // Remove background color
                  border: 'none', // Remove outline
                  color: 'inherit' // Use the default text color
                }}
                onClick={() => handleTagClick(tag)}
              />
            ))}
          </Box>
        </Box>
      </Box>

      <Box>{programList}</Box>
      <Box minHeight={'100px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Typography variant={'h5'} color={theme => theme.palette.primary.main}>
          More course
        </Typography>
      </Box>
    </Box>
  )
}

Programs.authGuard = false

export default Programs
