import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';

export default function BasicCard({
  name,
  price,
  category,
  photos,
}) {
  return (
    <Card className="product-card" sx={{ maxWidth: 345 }}>
      <CardMedia className="image-card" component="img" alt={name} height="150" image={photos} />
      <CardContent>
        <p>{name}</p>
        <Typography variant="body2" color="text.secondary">
          <p>
            {category}
          </p>
          <p>
            R$
            {' '}
            {price}
          </p>
        </Typography>
      </CardContent>
      <CardActions className="card-action-container">
        <Button size="small" className="mobile-share-btn"><MobileScreenShareIcon /></Button>
        <Button size="small" className="computer-share-btn"><ScreenShareIcon /></Button>
      </CardActions>
    </Card>
  );
}

BasicCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  photos: PropTypes.string.isRequired,
};
