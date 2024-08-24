import React from 'react'
import CategoryCollection from './CategoryCollection'
import CategoryWrapper from './CategoryWrapper'

function Categories() {
  return (
    <div className='container mx-auto mb-5 flex flex-col gap-10'>
      <div className='w-full flex items-end gap-7'>
        <p className='font-bold text-4xl text-[#253D4E]'>Featured Categories</p>
        <CategoryCollection collection={["Cake & Milk", "Coffes & Teas", "Pet Foods", "Vegetables"]}/>
      </div>
      <CategoryWrapper/>
    </div>
  )
}

export default Categories
