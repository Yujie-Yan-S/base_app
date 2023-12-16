import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import PropTypes from "prop-types";
import {useState} from "react";
import Divider from "@mui/material/Divider";
import Card from "./components/card";

const fakedata=[{
  pic:"https://picsum.photos/id/237/200/300",
  instructor:"Dr. Max Li",
  title:"Machine Learning Engineer"
},
  {
    pic:"https://picsum.photos/id/237/200/300",
    instructor:"Dr. Max Li",
    title:"Machine Learning Engineer"
  },
  {
    pic:"https://picsum.photos/id/237/200/300",
    instructor:"Dr. Max Li",
    title:"Machine Learning Engineer"
  },
  {
    pic:"https://picsum.photos/id/237/200/300",
    instructor:"Dr. Max Li",
    title:"Machine Learning Engineer"
  },{
    pic:"https://picsum.photos/id/237/200/300",
    instructor:"Dr. Max Li",
    title:"Machine Learning Engineer"
  }
]

const MyProgram = () => {

  const [tab, setTab] = useState(0)


  const handleTabChange = (event, newValue) => {

    setTab(newValue)
  }





  return (
    <Box width={"100%"} height={'100%'} display={"flex"} justifyContent={"center"}>
      <Box width={"83.3%"}>

        {/*My programs text*/}
        <Box height={"145px"} bgcolor={'white'} display={"flex"} justifyContent={"start"} alignItems={"center"}>
          <Typography variant={"h4"} fontWeight={"700"} color={theme => theme.palette.primary.main}>
            My Programs
          </Typography>
        </Box>

        {/*tabs*/}
        <Box width={'100%'}>
          <Tabs value={tab} onChange={handleTabChange} sx={{ "& .css-1pyy021-MuiTabs-flexContainer":{
            justifyContent:"start"
            }}}>
            <Tab label='All Programs' sx={{ml:16, mr:9}}/>
            <Tab label='Learning History' sx={{mx:9}} />
          </Tabs>
          <Divider sx={{ backgroundColor: theme => theme.palette.primary.main , mb:6}}/>

          {/*box of list of programs*/}
          {tab === 0 && <Box width={'100%'} >
            {fakedata.map((item, index)=>(
              <Card key={index} title={item.title} pic={item.pic} instructor={item.instructor}></Card>
            ))}

          </Box>} {/* Render Login content when activeTab is 0 */}
          {tab === 1 && <>456</>} {/* Render Signup content when activeTab is 1 */}
        </Box>








      </Box>


    </Box>
  );
}

export default MyProgram
