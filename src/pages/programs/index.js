import {useEffect, useRef, useState} from 'react'
import ProgramCard from './component/ProgramCard'
import { Box, List, ListItem, Menu, MenuItem, Select, TextField, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import Chip from '@mui/material/Chip'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { fetchProgramBySearch } from 'src/store/features/program_by_search/programSearchSlice'
import axios from 'axios'
import debounce from 'lodash/debounce'
import SearchDropDownList from './component/SearchDropDownList'
import zIndex from '@mui/material/styles/zIndex'

const Programs = () => {
  const [inputValue, setInputValue] = useState('')
  const [searchListOpen, setSearchListOpen] = useState(false)
  const [programNameList, setProgramNameList] = useState([])

  const dispatch = useDispatch()
  const inputRef = useRef(null);

  // const { programs } = useSelector(state => state.programs)
  const { programListFromSearch, status, error } = useSelector(state => state.programBySearch)

  const router = useRouter()
  const query = router.query

  useEffect(() => {
    if (router.isReady) {
      // console.log('query is', query)
      const params = {
        keyWord: query.keyWord,
        pageNum: query.pageNum,
        pageSize: query.pageSize
      };

      dispatch(fetchProgramBySearch(params));

      // dispatch(fetchProgramBySearch(`keyWord=${query.keyWord}&pageNum=${query.pageNum}&pageSize=${query.pageSize}`))
    }
  }, [dispatch, router])

  useEffect(() => {
    const search = async () => {
      if (inputValue !== '') {
        const res = await axios.get(
          `//api.airobotoedu.com/api/program/get_program_list_by_begin_word?keyWord=${inputValue}`
        )
        console.log(res.data.data)
        setProgramNameList(res.data.data)
      } else {
        setProgramNameList([])
      }
    }
    const debounceSearch = debounce(search, 300)
    debounceSearch()
  }, [inputValue])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSelectResult(inputValue);
    }
  };

  //



  if (status === 'loading') {
    return <box>Loading...</box>
  }

  if (status === 'failed') {
    return <box>Error: {error}</box>
  }

  // Top category tag
  const tags = [
    'Machine Learning',
    'Big Data',
    'Autonomous Driving',
    'Advanced Robotics',
    'Electric Vehicles',
    'Machine Learning',
    'Big Data',
    'Autonomous Driving',
    'Advanced Robotics',
    'Electric Vehicles'
  ]
  const tempProjectTage = ['Machine learning', 'Data Science', 'XXXX', 'XXXXXX']

  const handleTagClick = Tag => {
    router.push({
      pathname: '/programs/',
      query: { keyWord: Tag, pageNum: 0, pageSize: 6 }
    })
  }

  const handleSelectResult = async keyWord => {
    const params = {
      keyWord: keyWord,
    };

    dispatch(fetchProgramBySearch(params));
  }

  const handleInputChange = e => {
    setInputValue(e.target.value)
    setSearchListOpen(true)
  }

  const programList = programListFromSearch?.map((item, index) => {
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
        <Box width={'70%'} display={"flex"} justifyContent={"center"}>
          <TextField
            ref={inputRef} // Use ref directly
            value={inputValue}
            onChange={handleInputChange}
            onBlur={() => setTimeout(() => setSearchListOpen(false), 100)}
            onFocus={() => setSearchListOpen(true)}
            onKeyDown={handleKeyDown} // Add the event listener here
            InputProps={{
              sx: {
                position: 'relative',
                placeHolder: 'Search',
                borderRadius: '25px',
                height: '2rem',
              },
              startAdornment: (
                <InputAdornment position='end' onClick={()=>{handleSelectResult(inputValue);}}>
                  <SearchIcon/>
                </InputAdornment>
              ),
            }}
            id='fullWidth'
            sx={{ width: '95%', borderRadius: '25px', backgroundColor: '#f0f0f0' }}
          />
          {searchListOpen && (
            <List
              sx={{
                width: '66%',
                zIndex: 1,
                position: 'absolute',
                top: '26.5%',
                border: '1px solid #ccc',
                borderRadius: '4px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                background: 'white'
              }}
            >
              {programNameList.map((item, index) => {
                return (
                  <ListItem
                    button
                    key={index}
                    onClick={() => handleSelectResult(item)}
                    sx={{ width: '100%', textAlign: 'left' }}
                  >
                    {item}
                  </ListItem>
                )
              })}
            </List>
          )}
        </Box>

        <Box display='flex' flexDirection='column' sx={{ marginTop: '1rem', width: '70%' }}>
          <Box display='flex' flexWrap={'wrap'} justifyContent='flex-start' gap={3} overflow='hidden'>
            <Typography
              onClick={() => handleTagClick()}
              variant={'h6'}
              color={theme => theme.palette.primary.main}
              sx={{
                '&:hover': {
                  fontWeight: 'bold',
                  cursor: 'pointer' // Change the cursor to a pointer on hover
                }
              }}
            >
              All
            </Typography>
            {tags.map((tag, index) => (
              <Chip
                key={index}
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
