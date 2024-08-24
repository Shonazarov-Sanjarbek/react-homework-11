import React from 'react'
import card1 from "@/assets/category-card-1.png"
import card2 from "@/assets/category-card-2.png"
import card3 from "@/assets/category-card-3.png"
import card4 from "@/assets/category-card-4.png"
import card5 from "@/assets/category-card-5.png"
import card6 from "@/assets/category-card-6.png"
import card7 from "@/assets/category-card-7.png"
import card8 from "@/assets/category-card-8.png"
import card9 from "@/assets/category-card-9.png"
import card10 from "@/assets/category-card-10.png"

function CategoryWrapper() {
  
  let data = [
    {
      id: 1,
      url: card1,
      title: "Cake & Milk",
      desc: "26 items",
    },
    {
      id: 2,
      url: card2,
      title: "Oganic Kiwi",
      desc: "28 items",
    },
    {
      id: 3,
      url: card3,
      title: "Peach",
      desc: "14 items",
    },
    {
      id: 4,
      url: card4,
      title: "Red Apple",
      desc: "54 items",
    },
    {
      id: 5,
      url: card5,
      title: "Snack",
      desc: "56 items",
    },
    {
      id: 6,
      url: card6,
      title: "Vegetables",
      desc: "72 items",
    },
    {
      id: 7,
      url: card7,
      title: "Strawberry",
      desc: "36 items",
    },
    {
      id: 8,
      url: card8,
      title: "Black plum",
      desc: "123 items",
    },
    {
      id: 9,
      url: card9,
      title: "Custard apple",
      desc: "34 items",
    },
    {
      id: 10,
      url: card10,
      title: "Coffe & Tea",
      desc: "89 items",
    },
  ]

  const categoryCard = data?.map((card) => (
    <div key={card.id} className='w-[137px] h-[180px] bg-[#ecffec] flex flex-col rounded-xl justify-center items-center'>
        <img className='mb-2' src={card.url} alt="" />
        <p className='text-base text-[#253D4E] font-bold'>{card.title}</p>
        <span className='text-sm text-[#7E7E7E] font-normal'>{card.desc}</span>
    </div>
  ))

  return (
    <div className='w-full flex gap-6 items-center mx-auto justify-center'>
        {categoryCard}
    </div>
  )
}

export default CategoryWrapper
