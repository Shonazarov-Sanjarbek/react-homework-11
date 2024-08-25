import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../../assets/Logo.png";
import { IoLocationOutline, IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { useStateValue } from '@/context';

const Header = () => {

  const [{wishlist}, dispacth] = useStateValue()
  const [{cart}, __] = useStateValue()


  console.log(wishlist.length);
  
  return (
<div className="container mx-auto">
      <nav className=" flex justify-between  items-center mt-5">
          <div className="">
        <NavLink to="/">
            <img src={Logo} className="outline-none" alt="" />
        </NavLink>
          </div>
        <div className="nav__items flex justify-between border border-green-500 w-[50%] py-3 px-3">
          <div className="nav__select">
            <select className="outline-none" name="" id="">
              <option value="">All Categories</option>
              <option value="">All Categories</option>
              <option value="">All Categories</option>
            </select>
          </div>
          <div className="flex items-center w-[70%] border-l px-2">
            <input
              type="text"
              placeholder="Search for items..."
              className="outline-none w-[100%]"
            />
            <button type="Submit" className="text-2xl">
            <IoIosSearch />
            </button>
          </div>
        </div>

        <div className="location flex items-center">
        <div className="flex items-center shadow-[5px_5px_15px_0px_#0000000D] p-2">
  <IoLocationOutline />
  <select className="outline-none ml-2 text-center" name="" id="">
    <option value="">Your Location</option>
    <option value="">Uzbekistan</option>
    <option value="">Russia</option>
    <option value="">England</option>
  </select>
</div>
        </div>
        <div className="flex space-x-4">
          <NavLink to={"/wishlist"}>
            <button className="relative flex  px-4 py-2 bg-white">
              <div className="relative flex">
                <FaRegHeart className="relative text-2xl" /><sup>{wishlist.length}</sup>
              </div>
              <p className="ml-3 font-bold ">Wishlist </p>
            </button>
          </NavLink>
          <NavLink to={"/cart"}>
            <button className="relative flex items-center px-4 py-2 bg-white">
              <div className="relative flex">
                <IoCartOutline className=" text-2xl" /><sup>{cart.length}</sup>
              </div>
              <p className="ml-3 font-bold ">Cart</p>
            </button>
          </NavLink>
          <button  className="relative flex px-4 py-2 bg-white align-text-bottom">
            <div className="relative flex items-center">
              <CiUser className="text-3xl" />
            </div>
            <p className="ml-3 font-bold ">Account</p>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Header