import Carousel from 'react-material-ui-carousel';
import React from 'react';
import CarouselItem from './CarouselItem';
import { HeaderContext } from '../contexts/headerContext';
import { getAllBanners } from '../API'

export default function CarouselComponent() {
  const { banner, setBanner } = React.useContext(HeaderContext);

  React.useEffect(() => {
    const getBanners = async () => {
      const response = await getAllBanners();
      console.log(response);
      setBanner(response)
    }
    getBanners()
  }, [])

  return (
    <Carousel className="carrousel-container">
      {
       banner.length !== 0 ? banner.map( (item) => <CarouselItem key={item.id} image={item.img} /> ) : null
      }
    </Carousel>
  );
}
