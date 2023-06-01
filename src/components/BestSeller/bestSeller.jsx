import React, { useContext } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from '../ProductCard/productCard';
import { ProductContext } from '../../contexts/productContext';

const BestSeller = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    const {bestSellerProductData} = useContext(ProductContext);
  return (
    <div className='best-seller-div'>
      <Carousel responsive={responsive}>
          {bestSellerProductData?.map((product) => (
            <ProductCard productsData={product} />
          ))}
        </Carousel>
    </div>
  )
}

export default BestSeller
