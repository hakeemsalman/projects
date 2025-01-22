// MainContent.js
import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import CardGrid from './CardGrid';
import { useNavigate } from 'react-router-dom';

function MainContent() {
  const [items, setItems] = useState([]);

  const navigate = useNavigate();

  const handleViewItem = (item) => {
    navigate(`/location/${item.id}`, { state: { item } }); // Pass item data to the route
  };


  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const handleDeleteItem = (itemToDelete) => {
    setItems((prevItems) => prevItems.filter(item => item !== itemToDelete));
  };

  return (
    <Container sx={{ width: '80%', ml: '20%', mt: 2 }}>
      <Box>
        <Typography variant="h6" gutterBottom sx={{bgcolor: '#ccc'}}>
          Added Locations
        </Typography>
        {items.length === 0 ? (
          <Typography variant="body1" gutterBottom sx={{height:'100px', display: 'flex', alignItems:'center', justifyContent:'center'}}>
            No loctions added yet. Click "Add loctions" to add new loctations.
          </Typography>
        ) : (
          <Box>
            <Grid container spacing={2} sx={{ maxHeight: 400, overflowY: 'scroll', marginTop : 0 , pt:0, pb:2}}>
              {items.map((item, index) => (
                <Grid item xs={4} key={index}>
                  <Card sx={{ boxShadow: 3 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.image}
                      alt={item.location_name}
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom sx={{m:0, mt:0 , lineHeight:1}}>
                        {item.location_name}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {item.address}
                      </Typography>
                      <Box display="flex" gap={2}> {/* Flexbox container with gap */}
                      <Button 
                          variant="contained" 
                          style={{ backgroundColor: 'black', color: 'white' }} // Black background and white text
                          onClick={() => handleViewItem(item)}
                        >
                          View
                        </Button>
                        <Button 
                          variant="contained" 
                          color="secondary"
                          onClick={() => handleDeleteItem(item)}
                        >
                          Delete Location
                        </Button>                       
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom sx={{bgcolor: '#ccc'}}>
          Search for locations
        </Typography>
      </Box>
      <CardGrid onAddItem={handleAddItem} />
    </Container>
  );
}

export default MainContent;
