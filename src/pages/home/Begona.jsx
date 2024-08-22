import React, { useContext } from 'react'
import { Context } from './Home'

function Begona() {
    const data = useContext(Context)
  return (
    <div>
      <p>{data.a}</p>
    </div>
  )
}

export default Begona
