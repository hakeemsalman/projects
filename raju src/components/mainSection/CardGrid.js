// CardGrid.js
import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import data from '../../data.json';

function CardGrid({ onAddItem }) {
  const handleAddItem = (item) => {
    onAddItem(item);
  };

  return (
    <Grid container spacing={2} sx={{ maxHeight: 500, overflowY: 'scroll' , marginTop : 0 , pt:0, pb:2}}>
      {data.items.map((item, index) => (
        <Grid item xs={4} key={index}>
          <Card sx={{ boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="140"
              image={item.image}
              alt={item.title}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{m:0, mt:0 , lineHeight:1}}>
                {item.location_name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {item.address}
              </Typography>
              <Button 
                variant="contained" 
                color="primary"
                onClick={() => handleAddItem(item)}
              >
                Add Location
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default CardGrid;
