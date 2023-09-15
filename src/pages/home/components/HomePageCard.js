import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";


export default function HomePageCard({ image, text, width }) {
  return (
      <Paper elevation={5} sx={{width:width, height:'100%'}}>
      <Card sx={{width:'100%', height:'100%'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100%"
            image={image}
            alt="Card Image"
          />
          <CardContent sx={{pb:'0px !important',p:3, height:'84px'}} >
            <Typography height={'100%'}  sx={{fontWeight:'650', color:'black',wordWrap:"break-word", textOverflow:'ellipsis', overflow:'hidden'}}>
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Paper>

  );
}
