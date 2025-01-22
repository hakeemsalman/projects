import React from 'react';
import { useLocation , useNavigate} from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Box, Container, Button } from '@mui/material';
import Rating from '@mui/material/Rating';

function LocationVisit() {

  const [value, setValue] = React.useState(4);
  const location = useLocation();
  const { item } = location.state;
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back
  };

  const handleSave = () => {
    console.log('Saving location data...');
  };

  return (
    <Container sx={{ width: '80%', ml: '20%', pl:0}}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 2, pb: 2, borderBottom: '1px solid #ccc' }}>
        <Button variant="outlined" onClick={handleBack}>Back</Button>
        <Typography variant="h6" sx={{ textAlign: 'center', flexGrow: 1 }}>
          Location Details
        </Typography>
        <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
      </Box>
    <Box sx={{overflowY:'scroll', scrollBehavior:'smooth', p: 2 }}>
      <Card sx={{ boxShadow: 3 }}>
        <CardMedia
          component="img"
          height="300"
          image={item.image}
          alt={item.location_name}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom sx={{m:0,lineHeight: '30px'}}>
            {item.location_name}
            <Box sx={{ '& > legend': { mt: 2 } }}>
                <Rating
                    name="rating"
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                />
            </Box>
          </Typography>
          <Typography variant="body1" gutterBottom sx={{m:0}}>
            {item.address}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Full location details here...
          </Typography>
        </CardContent>
      </Card>
    </Box>
    <Box sx={{p:2}}>
    <Typography variant="h6">
            Discription:
            <Typography variant="p" color="textSecondary">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </Typography>
    </Typography>
    </Box>
    </Container>
  );
}

export default LocationVisit;
