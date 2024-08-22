import { useStateValue } from "@/context";
import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Products = ({ data, title }) => {
    const [ {wishlist}, dispacth ] = useStateValue()

    console.log([15, 30, 20].some( i => i < 20 ));
    console.log([15, 30, 20].every( i => i < 20 ));
    


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
        <button className="p-1">
          <AiOutlineShoppingCart/>
        </button>
    </div>
  ));
  return (
    <div className="container mx-auto">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <div className="grid grid-cols-4 gap-2">{items}</div>
    </div>
  );
};

export default Products;
