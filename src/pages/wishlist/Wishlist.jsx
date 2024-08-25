import Emty from '@/components/empty/Emty'
import Products from '@/components/Products/Products'
import { useStateValue } from '@/context'
import React from 'react'

function Wishlist() {
    const [ data, dispacth ] = useStateValue()

  return (
    <div>
        {
            data.wishlist.length ? 
            <Products title={"Wishlist"} data = {data.wishlist}/>
            :
            <Emty url="https://www.lifestone.in/assets/front/images/icons/empty-wishlist.svg" title="Sevimlilar bo'sh"/>
        }
    </div>
  )
}

export default Wishlist
