import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {CardActions} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const card = ({pic, title, instructor})=>{
  return (

      <Card sx={{ width:'99%', height:"120px", py:3, px:6, my:5}} elevation={10}>
        <Box width={'100%'} height={'100%'} display={"flex"} >
          <Box width={'22%'} height={'100%'} >
            <img width={'100%'} height={'100%'} style={{borderRadius:'15px', objectFit: 'cover'}} src={pic}></img>
          </Box>
          <Box pl={8} width={'49.2%'}  display={"flex"} flexDirection={"column"} justifyContent={"center"}>
            <Typography variant={"h6"} mb={3}  color={theme=> theme.palette.primary.main}>{title}</Typography>
            <Typography>{instructor}</Typography>
          </Box>
          <Box display={"flex"} justifyContent={"end"} alignItems={"end"} width={'28.8%'}>
            <Button sx={{px:8, mr:"-10px"}} variant="contained" endIcon={<ExpandMoreIcon sx={{ fontSize: "30px !important" }}/>}>View Study Process</Button>
          </Box>
        </Box>
      </Card>

  )
}

export default card
