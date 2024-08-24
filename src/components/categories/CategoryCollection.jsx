import React from 'react'
import { NavLink } from 'react-router-dom'

function CategoryCollection({collection}) {
  return (
    <ul className='flex gap-7 items-center'>
      {
        collection?.map((li, inx) => (
          <li className='category__item font-semibold text-base' key={inx}>
              <NavLink>
                  <span>
                    {li}
                  </span>
              </NavLink>
          </li>    
        ))
      }
    </ul>
  )
}

export default CategoryCollection
