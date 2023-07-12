import React from 'react'

export default function OldButton(props) {
  return (
   <div>
    <div className='shadow-btn'>
        <button className='py-2 px-4 bg-slate-300 text-black border-black border-2 '>{props.text}</button>
    </div>
   </div>
   
  )
}
