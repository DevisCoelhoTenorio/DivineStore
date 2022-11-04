import Carousel from 'react-material-ui-carousel';
import React from 'react';
import CarouselItem from './CarouselItem';

export default function CarouselComponent() {
  const items = [
    {
      image: 'https://img.lojasrenner.com.br/banner/01-home/20221103_HOME_CARROSSEL_ALTOVERAO_BELEZADEVERAO_DESK_BELEZA.jpg',
    },
    {
      image: 'https://img.lojasrenner.com.br/banner/01-home/20221103_HOME_CARROSSEL_ALTOVERAO_PECAUNICA_DESK_GERAL.jpg',
    }
]
  return (
    <Carousel className="carrousel-container">
      {
        items.map( (item, i) => <CarouselItem key={i} image={item.image} /> )
      }
    </Carousel>
  );
}
