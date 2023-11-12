import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import {useRouter} from "next/router";

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{ overflow: 'auto', maxHeight: '420px' }}
    >
      {value === index && (
        <Box>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

export default function BasicTabs({ about, syllabus }) {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const router = useRouter()

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
          <Tab label='About' {...a11yProps(0)} />
          <Tab label='Syllabus' {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Typography variant='body' color={'customColors.darkText'}>
          {about}
        </Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {syllabus.map((item, index) => (

          <Box key={item.id} height={'85px'} onClick = {()=>{router.push(
            {
              pathname: `/lesson/${item.id}`, // 这里的[index]将被替换为实际的值
            }
          )}}>
            {console.log(item)} {/* 在这里打印item的值 */}
            <Divider sx={{ mb: 1, background: theme => theme.palette.primary.main }} />
            <Box display={'flex'}>
              <Typography
                width={'23.4%'}
                sx={{ color: 'black' }}
                variant={'h5'}
                fontWeight={'650'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
              >
                lesson {index + 1}
              </Typography>
              <Typography
                width={'76.6%'}
                sx={{ color: 'black' }}
                variant={'body'}
                display={'flex'}
                alignItems={'center'}
              >
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </CustomTabPanel>
    </Box>
  )
}
