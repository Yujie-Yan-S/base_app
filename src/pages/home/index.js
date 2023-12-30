// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import HomePageCard from './components/HomePageCard'
import { styled } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { fetchCards } from '../../store/features/home_page_card/cardSlice'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { fetchImages } from '../../store/features/carousel_pic_list/carouselImagesSlice'
import {useRouter} from "next/router";
import auth from "../../configs/auth";


const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  }

  const router = useRouter()


  const handleCardClick = (id) => {
    console.log('clicked')
    if (auth.user) {
      router.push({
        pathname: '/course/user',
        query: { userId: id }
      });
    } else {
      router.push({
        pathname: `/course/${id}`
      });
    }
  };

  const Img = styled('img')({
    width:'100%',
    height: '50vh',
    objectFit: 'cover'
  })

  const dispatch = useDispatch()
  const { cards, status, error } = useSelector(state => state.cards)
  const { images, status1, error1 } = useSelector(state => state.images)
  let urls = images.data || []

  let cardData = cards.data || []

  useEffect(() => {
    dispatch(fetchCards())
    dispatch(fetchImages())
  }, [dispatch])

  if (status === 'loading') {
    return <Box>Loading...</Box>
  }

  if (status === 'failed') {
    return <Box>Error: {error}</Box>
  }

  if (status1 === 'loading') {
    return <Box>Loading...</Box>
  }

  if (status1 === 'failed') {
    return <Box>Error: {error1}</Box>
  }

  console.log('this is card dta', cardData)

  const MyComponent = cardData.map((item, index) => {
    return (
      <Grid key={index} item xs={6} sm={4} lg={3} display='flex' justifyContent='center' alignItems='center'>
        <HomePageCard
          click={()=>handleCardClick(item.id)}
          text={item.description} image={item.cover==="//media.airobotoedu.com/default.jpg"?item.cover : "https://picsum.photos/id/237/610/582"} width={'80%'} />
      </Grid>
    )
  })

  return (
    <Box display={'flex'} flexDirection={'column'}>
      {/*carousel*/}
      <Box sx={{ height: 'auto' }}>
        <Slider {...settings}>
          {urls.map((item, index) => {
            return <Img src={item} alt={'loading'} key={index} />
          })}
        </Slider>
      </Box>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box
          flex
          justifyContent
          alignContent
          flexDirection={'column'}
          sx={{ width: '90%', height: '60%', minHeight: '384px' }}
        >
          <Box sx={{ pl: 4 }} minHeight={'100px'} display='flex' alignItems='flex-end' justifyContent='left'>
            <Typography variant={"h4"} fontWeight={'700'} color={theme => theme.palette.primary.main}>
              Machine learing
            </Typography>
          </Box>
          <Box sx={{ minHeight: '300px' }} display='flex' justifyContent='center' alignItems='center'>
            <Box className={'test'} sx={{ width: '100%', minHeight: '300px', py: 7.5 }}>
              <Grid container sx={{ width: '100%' }} rowSpacing={8}>
                {MyComponent}
              </Grid>
            </Box>
          </Box>
          {/*<Box minHeight={'100px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>*/}
          {/*  <Typography variant={'h5'} color={theme => theme.palette.primary.main}>*/}
          {/*    More course*/}
          {/*  </Typography>*/}
          {/*</Box>*/}
        </Box>
      </Box>
    </Box>
  )
}

Home.authGuard = false

export default Home
