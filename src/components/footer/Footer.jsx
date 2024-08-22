import React, { useState, useReducer } from 'react'

const Footer = () => {


  return (
    <div className='h-60 bg-slate-900 text-white'>
        <button>Uzbek</button>
        <button>English</button>
        <br />
        {/* <h2>{data.son}</h2> */}
        {/* <button onClick={() => dispatch({type: "INC" , payload: 1})}> Increment </button> */}
        {/* <button onClick={() => dispatch({type: "INC" , payload: 10})}> Increment </button> */}
        {/* <button disabled={data.son <= 0} onClick={() => dispatch({type: "DEC"})}> Decriment </button> */}
    </div>
  )
}

export default Footer