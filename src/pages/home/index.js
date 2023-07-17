// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import {Container} from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import HomePageCard from "./components/HomePageCard";
import {styled} from "@mui/material/styles";

const items =
  [
    {
      url:"https://picsum.photos/200/300",
      text:'lekajlfkdddddddddddddddddddddddddddddddddddddjas;jdsla;fjl;das;sdalfaj;j;'
    },{
    url:"https://picsum.photos/200/300",
    text:'lekajlfkjas;jdsla;fjl;das;sdalfaj;j;'
  },{
    url:"https://picsum.photos/200/300",
    text:'lekajlfkjas;jdsla;fjl;das;sdalfaj;j;'
  },{
    url:"https://picsum.photos/200/300",
    text:'lekajlfkjas;jdsla;fjl;das;sdalfaj;j;'
  }
  ]

const MyComponent = items.map((item, index) => {
  return (
    <Grid key={index} item={3} display='flex' justifyContent="center" alignItems="center">
      <HomePageCard text={item.text} image={item.url}/>
    </Grid>
  )
})




const Home = () => {
  return (
    <Container maxWidth={'false'} sx={{p:0, m:0}}>
      <Box container sx={{height:'100%'}}>
        <Box square sx={{bgcolor:'red', height:'40%', minHeight: '320px'}}/>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
         <Box flex justifyContent alignContent flexDirection={'column'} sx={{width:'90%', height:'60%' ,minHeight:'384px'}}>
          <Box sx={{}}  minHeight={'100px'} display='flex' alignItems='flex-end' justifyContent='left'>
            <Typography fontSize={'28px'} fontWeight={'700'} color={'#004aad'}>
              Machine learing
            </Typography>
          </Box>
          <Box sx={{minHeight:'300px'}} display='flex' justifyContent="center" alignItems="center">
            <Box   sx={{ width: '100%' , py:10}}>
              <Grid container rowSpacing={10} columnSpacing={{ xs: 40, sm:40, md: 40}}>
                {MyComponent}
              </Grid>
            </Box>
          </Box>
          <Box minHeight={'100px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Typography variant={'h5'} color={'#004aad'}>
              More course
            </Typography>
          </Box>
        </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Home
