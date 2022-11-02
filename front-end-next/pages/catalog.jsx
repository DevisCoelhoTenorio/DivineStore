import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { getAllProducts } from '../API';
import Loading from '../components/Loading';
import Header from '../components/Header';
import BasicCard from '../components/BasicCard';
// import '../styles/catalog.css';

function Catalog() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const response = await getAllProducts();
      setProducts(response);
    };
    getProducts();
  }, []);
  return (
    <div className="catalog-page">
      <Header />
      <Container className="products-container" maxWidth="sm">
          <CssBaseline />
          {products.length === 0
            ? Loading
            : products.map((item) => (
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
    </div>
  );
}

export default Catalog;
