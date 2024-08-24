import React from "react"
import { Link } from "react-router-dom";
function Product({product}) {
    console.log(product);
    
  return (
    <div>
        <div className=" border p-3" key={product.id}>
            <Link to={`product/${product.id}`}>
            <div className="w-full h-60 bg-gray-200">
                <img className="w-full h-full object-contain" src={product.images[0]} alt="Photo" />
            </div>
            </Link>
          <p>{product.title}</p>
          <strong>{product.price}</strong>
          <br />
          <button onClick={() => dispacth({type: "ADD_TO_WISHLIST", payload: product})} className="border p-1">
            {/* {
              wishlist?.some( item => item.id === product.id ) ?
              <FaHeart className="text-red-600"/>
              :
              <FaRegHeart />
            } */}
            </button>
            <button onClick={() => dispacth({type: "INC_CART", payload: product})} className="p-1">
              {/* <AiOutlineShoppingCart/> */}
            </button>
        </div>
    </div>
  )
}

export default Product
