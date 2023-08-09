import { useRouter } from 'next/router';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import HomePageCard from "../../home/components/HomePageCard";
import React from "react";
import Divider from "@mui/material/Divider";

const CourseDetails = () => {
  const router = useRouter();
  const { programid } = router.query;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false
  };

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
      <Divider sx={{ background: theme =>theme.palette.primary.main, width:"1037px"  }} />
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
      <Divider sx={{ background: theme =>theme.palette.primary.main, width:"1037px"  }} />

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

      <Divider sx={{ background: theme =>theme.palette.primary.main, width:"1037px"  }} />


      <Box
        sx={{
          width: '100%',
          height: '450px',
          background: 'white',
        }}
      >


      </Box>

    </Box>
  );
};

export default CourseDetails;
