import React from 'react'

const Navbar = () => {
  return (
    <>
   <nav className='flex justify-between items-center  px-6 py-4'>
        <h1 className='text-xl font-semibold'>Daily Quotes Generator</h1>
        <ul className='flex gap-6 text-base'>
            <li className='cursor-pointer hover:underline'>Home</li>
            <li className='cursor-pointer hover:underline'>Quotes</li>
            <li className='cursor-pointer hover:underline'>Contact Us</li>
            <li className='cursor-pointer hover:underline'>Sign up</li>
        </ul>
   </nav>
    </>
  )
}

export default Navbar