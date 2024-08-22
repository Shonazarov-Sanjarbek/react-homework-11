import Products from '@/components/products/Products'
import { useStateValue } from '@/context'
import { useFetch } from '@/hooks/useFetch'
import React, { createContext, useState } from 'react'
// import Child from './Child'

export const Context = createContext()

const Home = () => {
  const {data: payload, loading} = useFetch("/products", {limit: 6})
  const [data, dispacth] = useStateValue()
  console.log(payload?.products);
  
  // let a = "Hello world"
  // let son = 15
  return (
    <div>
      <h2 className='text-center text-4xl'>Home</h2>
      {/* <Context.Provider value={{a, son}}>
      <Child/>
      </Context.Provider>  */}
      <button onClick={() => dispacth({type: "INC", payload: 1})}>Increment</button>
      <Products title={"New product"} data={payload?.products}/>
    </div>
  )
}

export default Home