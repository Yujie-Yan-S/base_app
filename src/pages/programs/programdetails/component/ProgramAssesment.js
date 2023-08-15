import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Stack} from "@mui/system";
import Avatar from "@mui/material/Avatar";
import React from "react";

const ProgramAssesment=({description,imgs})=>{


  return(
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'row'}
      sx={{
        width: '100%',
        height: '450px',
        background: 'white'
      }}
    >
      {/*set the white space*/}
      <Box sx={{ height: '73.333%', width:'100%' }} display={'flex'} alignItems={'center'}>
        {/*left of assesment*/}
        <Box sx={{ width: '67.4%', height: '100%' }} display={'flex'} flexDirection={'column'}>
          <Box sx={{ height: '10%' }} display={'flex'} justifyContent={'start'} alignItems={'center'}>
            <Typography variant={'h3'} color={theme => theme.palette.primary.main}>
              Assesment
            </Typography>
          </Box>
          <Box
            sx={{ height: '73.5%', width: '89%' }}
            display={'flex'}
            justifyContent={'start'}
            alignItems={'center'}
          >
            <Typography mt={4} sx={{ fontWeight: 600, fontSize: '17px' }}>
              {
                description?(description):
                  (<>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum
                  </>)
              }

            </Typography>
          </Box>
          <Box sx={{ height: '16.5%' }}>
            <Button variant='contained' sx={{ height: '55px', width: '360px' }}>
              <Typography color={'white'} variant={'h5'}>
                Take The Assesment
              </Typography>
            </Button>
          </Box>
        </Box>

        {/*  right of assesment*/}
        <Box
          sx={{ width: '32.6%', height: '54%' }}
          display={'flex'}
          alignItems={'center'}
          flexDirection={'column'}
          justifyContent={'space-between'}
        >
          <Typography variant={'h4'}>Certified By...</Typography>
          <Box>
            <Stack direction='row' spacing={2}>
              <Avatar sx={{ height: '100px', width: '100px' }}>{imgs?imgs[0]:" "} </Avatar>
              <Avatar sx={{ height: '100px', width: '100px' }}> {imgs?imgs[1]:" "}</Avatar>
              <Avatar sx={{ height: '100px', width: '100px' }}> {imgs?imgs[2]:" "}</Avatar>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}



export default ProgramAssesment;
