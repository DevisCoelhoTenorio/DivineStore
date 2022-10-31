import React, { useState, useEffect, Fragment } from 'react';
import { getAllProducts } from '../API';
import { IFullProduct } from '../interfaces';
import Loading from '../components/Loading';
import Header from '../components/Header';
import BasicCard from '../components/BasicCard';
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
      <div className="cards">
        <>
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
      </div>
    </div>
  );
};

export default Catalog;
