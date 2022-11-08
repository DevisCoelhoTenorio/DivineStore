import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { getAllProducts } from '../API';
import Loading from '../components/Loading';
import HeaderCatalog from '../components/HeaderCatalog';
import BasicCard from '../components/BasicCard';
import { HeaderContext } from '../contexts';
import Footer from '../components/Footer';
import CarouselComponent from '../components/CarouselComponent';
import Advantages from '../components/Advantages';

function Catalog() {
  const [products, setProducts] = useState([]);
  const { category, search } = React.useContext(HeaderContext);

  const filterCategory = category !== 'Todas' ? products
    .filter(({ category: { name } }) => category === name) : products;

  const filterSearch = filterCategory
    .filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    const getProducts = async () => {
      const response = await getAllProducts();
      setProducts(response);
    };
    getProducts();
  }, []);

  return (
    <div className="catalog-page">
      <HeaderCatalog />
      <CarouselComponent />
      <Advantages />
      <Container className="products-container" maxWidth="sm">
        <CssBaseline />
        {products.length === 0
          ? Loading
          : filterSearch.map((item) => (
            <BasicCard
              className="product-card"
              key={item.id}
              name={item.name}
              price={item.price}
              category={item.category.name}
              photos={item.photos[0].img}
            />
          ))}
      </Container>
      <Footer />
    </div>
  );
}

export default Catalog;
