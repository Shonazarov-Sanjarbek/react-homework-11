import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProductsCard from './ProductsCard';
import { useStateValue } from '@/context';

function Products({data, title}) {
  const [products, setProducts] = useState([]); 

  const [ {wishlist}, dispacth ] = useStateValue()



  let items = data?.map((product, inx) => (
    <div className="border p-3" key={inx}>
      <div className="w-full h-60 bg-gray-200">
        <img className="w-full h-full object-contain" src={product.images[0]} alt="Photo" />
      </div>
      <p>{product.title}</p>
      <strong>{product.price}</strong>
      <br />
      <button onClick={() => dispacth({type: "ADD_TO_WISHLIST", payload: product})} className="border p-1">
        {
          wishlist?.some( item => item.id === product.id ) ?
          <FaHeart className="text-red-600"/>
          :
          <FaRegHeart />
        }
        </button>
        <button onClick={() => dispacth({type: "INC_CART", payload: product})} className="p-1">
          <AiOutlineShoppingCart/>
        </button>
    </div>
  ));

  return (
    <div className='container mx-auto my-12'>
      <ProductsCard products={products}/>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <div className="grid grid-cols-4 gap-2">{items}</div>
    </div>
  )
}

export default Products
