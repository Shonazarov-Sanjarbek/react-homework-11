import Emty from '@/components/empty/Emty'
import { useStateValue } from '@/context'
import React from 'react'

function Cart() {
    const [ cart, dispacth ] = useStateValue()
    // console.log(cart.cart);
    
  return (
    <div>
        {
          cart.cart.length ?
          <div className='w-full h-[60vh] my-10 border'>
            {
              cart.cart?.map(item => (
                <div className='container mx-auto flex items-center gap-3' key={item.id}>
                    <img src={item.images[0]} className='w-20' alt="" />
                    <p className='flex-1'>{item.title}</p>
                    <button disabled={item.quantity <= 1} onClick={() => dispacth({type: "DEC_CART", payload: item})}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispacth({type: "INC_CART", payload: item})}>+</button>
                </div>
              ))
            }
          </div>
          :
          <Emty url="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" title="Savatcha bo'sh"/>
        }
    </div>
  )
}

export default Cart
