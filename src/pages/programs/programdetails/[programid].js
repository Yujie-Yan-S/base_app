import { useRouter } from 'next/router';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import HomePageCard from "../../home/components/HomePageCard";
import React from "react";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import {Stack} from "@mui/system";
import Avatar from "@mui/material/Avatar";
import useMediaQuery from "@mui/material/useMediaQuery";


const CourseDetails = () => {
  const router = useRouter();
  const { programid } = router.query;

  const  data = [
    {text:"asfsadfadsfasf",url:"https://picsum.photos/400/300"},
    {text:"asfsadfadsfasf",url:"https://picsum.photos/400/300"},
    {text:"asfsadfadsfasf",url:"https://picsum.photos/400/300"},
    {text:"asfsadfadsfasf",url:"https://picsum.photos/400/300"},
    {text:"asfsadfadsfasf",url:"https://picsum.photos/400/300"},
    {text:"asfsadfadsfasf",url:"https://picsum.photos/400/300"},
    {text:"asfsadfadsfasf",url:"https://picsum.photos/400/300"},
    {text:"asfsadfadsfasf",url:"https://picsum.photos/400/300"},
    {text:"asfsadfadsfasf",url:"https://picsum.photos/400/300"},
    {text:"asfsadfadsfasf",url:"https://picsum.photos/400/300"}
  ]

  const lg=useMediaQuery(theme => theme.breakpoints.down('lg'))
  const xl=useMediaQuery(theme => theme.breakpoints.down('xl'))
  const md=useMediaQuery(theme => theme.breakpoints.down('md'))
  const sm=useMediaQuery(theme => theme.breakpoints.down('sm'))
  const xs=useMediaQuery(theme => theme.breakpoints.down('xs'))


  let slidesToShow = data.length;
  let slidesToScroll = data.length;

  if (xs) {
    slidesToShow = 1;
    slidesToScroll = 1;
  } else if (sm) {
    slidesToShow = 2;
    slidesToScroll = 2;
  } else if (md) {
    slidesToShow = 3;
    slidesToScroll = 3;
  } else if (lg) {
    slidesToShow = 3;
    slidesToScroll = 3;
  } else  {
    slidesToShow = 4;
    slidesToScroll = 4;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    arrows: false
  };






  // 在这里可以根据 courseid 加载相应的课程信息

  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
      <Box
        sx={{
          width: '100%',
          height: '470px',

        }}
      >
        <Typography
          variant={'h2'}
        >
          banner
        </Typography>

      </Box>
      <Divider sx={{background: theme => theme.palette.primary.main, width: "1037px"}}/>
      {/*courses*/}
      <Box
        sx={{
          width: '1037px',
          height: '430px',
        }}
      >
        <Box
          sx={{
            height: '90px'
          }}
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"flex-end"}>
          <Typography color={theme => theme.palette.primary.main} variant={"h3"} sx={{fontWeight: 600}}>
            Courses
          </Typography>
        </Box>
        <Box sx={{
          height: '335px'


        }}
             display={"flex"}
             justifyContent={"center"}
        >
          <Box pt={'59px'} width={"106%"}>
            <Slider {...settings}>
              {data.map((item, i) => {
                return (
                  <Box key={i} pb={3} display={"flex !important"} justifyContent={"center"}>
                    <HomePageCard text={item.text} image={item.url}/>
                  </Box>
                );
              })}


            </Slider>
          </Box>
        </Box>


      </Box>
      <Divider sx={{background: theme => theme.palette.primary.main, width: "1037px"}}/>

      <Box
        sx={{
          width: '100%',
          height: '410px',
        }}
      >
        <Typography
          variant={'h2'}
        >
          projects
        </Typography>

      </Box>

      <Divider sx={{background: theme => theme.palette.primary.main, width: "1037px"}}/>


      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"row"}
        sx={{
          width: '100%',
          height: '450px',
          background: 'white',
        }}
      >
        {/*set the white space*/}
        <Box sx={{height: "73.333%", width: "85%"}} display={"flex"} alignItems={"center"}>
          {/*left of assesment*/}
          <Box sx={{width: "67.4%", height: "100%"}} display={'flex'} flexDirection={"column"}>
            <Box sx={{height: "10%"}} display={"flex"} justifyContent={"start"} alignItems={"center"}>
              <Typography variant={"h3"} color={theme => theme.palette.primary.main}>Assesment</Typography>
            </Box>
            <Box sx={{height: "73.5%", width: "89%"}} display={"flex"} justifyContent={"start"} alignItems={"center"}>
              <Typography mt={4} sx={{fontWeight: 600, fontSize: '17px'}}>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum</Typography>
            </Box>
            <Box sx={{height: "16.5%"}}>
              <Button variant="contained" sx={{height: "55px", width: "360px"}}>
                <Typography color={"white"} variant={'h5'}>Take The Assesment</Typography>
              </Button>
            </Box>
          </Box>


          {/*  right of assesment*/}
          <Box sx={{width: "32.6%", height: "54%"}} display={"flex"} alignItems={"center"} flexDirection={"column"} justifyContent={"space-between"}>
            <Typography variant={'h4'}>Certified By...</Typography>
            <Box>
              <Stack direction="row" spacing={2}>
                <Avatar sx={{height:'100px', width:"100px"}}> </Avatar>
                <Avatar sx={{height:'100px', width:"100px"}}> </Avatar>
                <Avatar sx={{height:'100px', width:"100px"}}> </Avatar>
              </Stack>
            </Box>
          </Box>
        </Box>

      </Box>

    </Box>
  );
};

export default CourseDetails;
