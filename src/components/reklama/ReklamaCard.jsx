import React from 'react'
import card1 from "@/assets/reklama-card1.png"
import card2 from "@/assets/reklama-card2.png"
import card3 from "@/assets/reklama-card3.png"

function ReklamaCard({btn, title1, title2, title3}) {
  return (
    <>
    <div className='w-[calc(33.33%)] h-[300px] flex flex-col justify-center pl-[50px] gap-7 items-start' style={{backgroundImage: `url(${card1})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
      <p className='text-2xl font-bold text-[#253D4E] w-[55%]'>
        {title1}
      </p>
      <button className='w-[30%] text-white rounded-[4px] bg-[#3BB77E] px-[14px] py-[9px]'>
            {btn}
      </button>
    </div>
    <div className='w-[calc(33.33%)] h-[300px] flex flex-col justify-center pl-[50px] gap-7 items-start' style={{backgroundImage: `url(${card2})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
      <p className='text-2xl font-bold text-[#253D4E] w-[55%]'>
        {title2}
      </p>
      <button className='w-[30%] text-white rounded-[4px] bg-[#3BB77E] px-[14px] py-[9px]'>
            {btn}
      </button>
    </div>
    <div className='w-[calc(33.33%)] h-[300px] flex flex-col justify-center pl-[50px] gap-7 items-start' style={{backgroundImage: `url(${card3})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
      <p className='text-2xl font-bold text-[#253D4E] w-[55%]'>
        {title3}
      </p>
      <button className='w-[30%] text-white rounded-[4px] bg-[#3BB77E] px-[14px] py-[9px]'>
            {btn}
      </button>
    </div>
    
    </>
  )
}

export default ReklamaCard
