// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { Container } from '@mui/material'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import HomePageCard from './components/HomePageCard'
import { styled } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { fetchCards } from '../../store/features/home_page_card/cardSlice'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {fetchImages} from "../../store/features/carousel_pic_list/carouselImagesSlice";
import LoginPage from "../login";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  }

  const Img = styled('img')({
    height: '377px',
    objectFit:"cover"
  })

  const dispatch = useDispatch()
  const { cards, status, error } = useSelector(state => state.cards)
  const {images, status1,error1}= useSelector(state => state.images)
  let urls = images.data || []

  let cardData = cards.data || []



  useEffect(() => {
    dispatch(fetchCards())
    dispatch(fetchImages())
  }, [dispatch])




  if (status === 'loading') {
    return <box>Loading...</box>
  }

  if (status === 'failed') {
    return <box>Error: {error}</box>
  }

  if (status1 === 'loading') {
    return <box>Loading...</box>
  }

  if (status1 === 'failed') {
    return <box>Error: {error1}</box>
  }

  const MyComponent = cardData.map((item, index) => {
    return (
      <Grid key={index} item xs={4} sm={4} lg={3} display='flex' justifyContent='center' alignItems='center'>
        <HomePageCard text={item.description} image={item.cover} />
      </Grid>
    )
  })

  return (
    <Box container display={'flex'} flexDirection={'column'}>
      {/*carousel*/}
      <Box square sx={{ height: '376px' }}>
        <Slider {...settings}>

          {urls.map((item,index)=>{
            return (
              <Img
                src={item}
                alt={'loading'}
                key={index}

              />
            );
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
            <Typography fontSize={'28px'} fontWeight={'700'} color={theme => theme.palette.primary.main}>
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
          <Box minHeight={'100px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Typography variant={'h5'} color={theme => theme.palette.primary.main}>
              More course
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

Home.authGuard = false


export default Home
