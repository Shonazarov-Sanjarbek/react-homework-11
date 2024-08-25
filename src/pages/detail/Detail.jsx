import ProductsCard from '@/components/Products/ProductsCard'
import axios from '@/api/index'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

function Detail() {
  const {id} = useParams()
  const [data, setData] = useState(null)
  const [offsetsy, setoffsetsy] = useState(1)
  const [sellect, setSellect] = useState("")
  const [products, setProducts] = useState(null)
  const [productsCard, setProductsCard] = useState(null)
  const [total, settottal] = useState(0)


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  useEffect(() => {
    axios
        .get(`/products/${id}`)
        .then(res => setData(res.data))
        .catch(res => console.log(res))
  }, [id])
  useEffect(() => {
    axios
        .get(`/products`, {params: {limit: 4}})
        .then(res => setProductsCard(res.data.products))
        .catch(res => console.log(res))
  }, [data])

  useEffect(() => {
    axios
      .get(`/products${sellect}`, {
        params: {
          limit: 4,
        },
      })
      .then((res) => {
        settottal(res.data.total),
          setProducts(
            res.data.products?.map((produc) => ({ ...produc, count: 0 }))
          );
      })
      .catch((err) => console.log(err));
  }, [offsetsy, sellect]);
    // console.log(data?.images);
    
  return (
    <>
       <div className='grid p-10 grid-cols-2'>
      <div>
        <div className='w-1/2 sticky top-0 left-0'>
          <img className='' src={products?.images[0]} alt="" />
          <div className='flex gap-1 mt-4'>
              {data?.images?.map((item, inx) => (
                <img className='w-24 h-24 object-contain' key={inx} src={item}  alt="" />
              ))}
          </div>
        </div>
      </div>
      <div className='w-1/2 flex flex-col gap-4'>
          <h2 className='text-3xl'>{data?.title}</h2>
          <div className='flex items-center'>
            <p className="text-xl">Арт. 890.321.44 / </p>
            <p className="text-gray-400">Под заказ на 4.04.2021</p>
          </div>
          <p className="text-gray-400">
            Банка с крышкой и поднос, 5 шт., стекло пробка банки и коробки
            помогут организовать удобное хранение.{" "}
          </p>
          <div className='flex items-center gap-14'>
            <p className='text-5xl font-bold'>{data?.price} USD</p>
          </div>
          <div className="w-1/2 flex items-center gap-3">
            
          </div>
          <div className="flex items-center gap-7">
              <button className="bg-orange-500 p-2 rounded-lg text-white pl-4 pr-4">
                Добаить в корзину +
              </button>
              <div className="flex items-center gap-2">
                <div>
                  <img src="" alt="" />
                </div>
                <div>
                  <img src="" alt="" />
                </div>
              </div>
          </div>
          <p className="text-gray-400">{data?.description}</p>
            <div className="flex flex-col gap-3">
                <hr />
                <p>{data?.warrantyInformation}</p>
                <hr />
                <p>{data?.brand}</p>
                <hr />
            </div>
        </div>  
    </div>
    <div className="cards w-full  mt-9 justify-center items-center">
        <p className="text-3xl font-bold">С этим товаром также заказывают</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <ProductsCard products={productsCard}/>
        </div>
      </div>
 
    </>
  )
}

export default Detail
