import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../API';
import { IFullProduct } from '../interfaces';
import Loading from '../components/Loading';
import Header from '../components/Header';
import BasicCard from '../components/BasicCard';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
// import '../styles/catalog.css';

const Catalog = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async (): Promise<void> => {
      const response = await getAllProducts();
      setProducts(response as any);
    };
    getProducts();
  }, []);
  return (
    <div>
      <Header />
      <Container maxWidth="sm">
        <>
          <CssBaseline />
          {products.length === 0
            ? Loading
            : products.map((item: IFullProduct) => (
                <BasicCard
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  category={item.category.name}
                  photos={item.photos[0].img}
                />
              ))}
        </>
      </Container>
    </div>
  );
};

export default Catalog;
