import { useStateValue } from '@/context'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const [{wishlist}, dispacth] = useStateValue()

  console.log(wishlist.length);
  
  return (
    <header className=' bg-slate-100 h-20'>
      <div className='h-full flex gap-8 items-center container mx-auto'>
        <NavLink className="text-2xl flex-1" to={"/"}>Logoo</NavLink>
        <NavLink to={"/cart"}>Cart</NavLink>
        <NavLink to={"/wishlist"}>Wishlist <sup>{wishlist.length}</sup></NavLink>
        <NavLink to={"/login"}>Login</NavLink>
      </div>
    </header>
  )
}

export default Header