import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

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
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p>
            Categoria:
            {category}
          </p>
          <p>
            R$:
            {price}
          </p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Compartilhar</Button>
        <Button size="small">Detalhes</Button>
      </CardActions>
    </Card>
  );
}

BasicCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  photos: PropTypes.arrayOf(PropTypes.string),
};

BasicCard.defaultProps = {
  photos: [],
};
