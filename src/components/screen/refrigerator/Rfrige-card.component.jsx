import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function RfrigeCard({item}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={item.Photo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {item.ProductName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button> 
        <Button size="small">Learn More</Button> 
      </CardActions>
    </Card>
  );
}
