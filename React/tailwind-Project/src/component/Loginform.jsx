
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faApple, faFacebook } from "@fortawesome/free-brands-svg-icons";



const Loginform = () => {
  
  return (
    <div className="form flex justify-center w-full">
       <form action="#" className='h-fit  rounded-3xl p-10   bg-white  my-4'>
        <h1 className='text-3xl font-bold mb-4 text-center'>Agent Login</h1>

        <p className='mb-2 text-sm text-center'>Hey, Enter your details to get <br /> sign in to your account</p>

        <input type="text"  placeholder='Enter Email / Phone No' className='w-full border-[0.5px] border-gray-300 p-3 my-2 rounded-lg text-sm px-4 font-mono' />

        <br />

        <input type="password" placeholder='Passcode' className='w-full border-[0.5px] border-gray-300 p-3 my-3 rounded-lg text-sm px-4 font-mono'/>

        <p className=' text-xs mt-1 mb-5 font-medium'>Having trouble in sign in ?</p>

        <button className='w-full bg-[#222222] text-white p-3 rounded-lg mb-6'>Sign in</button>

        <p className='text-xs text-center font-medium mb-4'>-- Or Sign in with --</p>

        <div className='flex justify-between w-full   h-full gap-1 font-bold text-[14px] mb-4'>
            <div className='  h-10 border-[0.5px] border-gray-300 rounded-sm text-center content-center px-2 '><FontAwesomeIcon fontSize={18} icon={faGoogle} /> Google</div>
            <div className='  h-10 border-[0.5px] border-gray-300 rounded-sm text-center content-center px-2 '><FontAwesomeIcon fontSize={20} icon={faApple} /> Apple ID</div>
            <div className='  h-10 border-[0.5px] border-gray-300 rounded-sm text-center content-center px-2 '><FontAwesomeIcon fontSize={20} icon={faFacebook} /> Facebook</div>
        </div>

        <p className='text-sm text-center'>Don't have an account? <span className='font-medium'>Request Now</span></p>

    </form>
    </div>
   
  )
}

export default Loginform