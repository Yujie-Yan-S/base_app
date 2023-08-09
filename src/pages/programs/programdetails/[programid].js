import { useRouter } from 'next/router';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const CourseDetails = () => {
  const router = useRouter();
  const { programid } = router.query;

  // 在这里可以根据 courseid 加载相应的课程信息

  return (
    <Box>
    <Box
      sx={{
        width:'100%',
        height:'470px',
        background:'pink',
      }}
    >
  <Typography
  variant={'h2'}
  >
    banner
  </Typography>

    </Box>
      <Box
        sx={{
          width:'100%',
          height:'430px',
          background:'yellow',
        }}
      >


      </Box>

      <Box
        sx={{
          width:'100%',
          height:'410px',
          background:'green',
        }}
      >
        <Typography
          variant={'h2'}
        >
          projects
        </Typography>

      </Box>

      <Box
        sx={{
          width:'100%',
          height:'450px',
          background:'white',
        }}
      >


      </Box>

    </Box>
  );
};

export default CourseDetails;
