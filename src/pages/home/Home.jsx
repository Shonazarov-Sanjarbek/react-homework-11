import Banner from '@/components/banner/Banner'
import Categories from '@/components/categories/Categories'
import Hero from '@/components/hero/Hero'
import Products from '@/components/Products/Products'
import Reklama from '@/components/reklama/Reklama'
import { useStateValue } from '@/context'
import { useFetch } from '@/hooks/useFetch'
import React, { createContext, useState } from 'react'
// import Child from './Child'


export const Context = createContext()


const Home = () => {
  const {data: payload, loading} = useFetch("/products", {limit: 12})
  const [data, dispacth] = useStateValue()

  return (
    <>
      <Hero/>
      <Categories/>
      <Reklama/>
      <Products title={"Popular Products"} data={payload?.products}/>
      <Banner/>
    </>
  )
}

export default Home