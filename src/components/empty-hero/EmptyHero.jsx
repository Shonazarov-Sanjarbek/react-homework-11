import React from 'react'
import bgImg from "@/assets/bg.png"

function EmptyHero({title, desc}) {
  return (
    <div className='container mx-auto w-full h-[538px] my-20 rounded-2xl pl-20 flex flex-col justify-center gap-8' style={{backgroundImage: `url(${bgImg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
      <p className='w-[50%] text-5xl font-bold text-[#253D4E]'>
        {title}
      </p>
      <span className='w-[50%] text-3xl font-normal text-[#7E7E7E] mb-8'>
        {desc}
      </span>
      <form className='w-[35%] h-16 bg-white rounded-[50px] flex justify-between' action="">
          <input required className='w-[65%] rounded-[50px] px-5 ' type="text" placeholder='Your email address ' />
          <button className='w-[35%]  rounded-[50px] bg-[#3BB77E] text-white'>Subscribe</button>
      </form>
    </div>
  )
}

export default EmptyHero
