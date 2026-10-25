import React from 'react'
import {Globe} from "lucide-react"

const navbar = () => {
  
  return (
    <nav className='w-full p-4 flex justify-between'>
        <div className='left w-1/2'>
            <h1 className='font-bold text-4xl '>Razor</h1>
        </div>
        <div className="right flex justify-around items-center w-1/3 ">
            <Globe/>
            <button className='h-fit w-fit bg-[#DED6C1] p-2 px-4 rounded-lg'>Sign Up</button>
            <button className='h-fit w-fit bg-[#222222] text-white  p-2 px-3 rounded-lg'>Request Demo</button>
        </div>

    </nav>
  )
}

export default navbar