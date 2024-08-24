import React, { useState, memo } from 'react'
import Product from './Product';

const ProductsCard = ({products}) => {

  

  const productItem = products?.map((product) => (
    <Product key={product.id} product={product}/>
));
  
  return (
    <div className='flex justify-center flex-wrap'>
      {productItem}
    </div>
  )
}

export default memo(ProductsCard) 
