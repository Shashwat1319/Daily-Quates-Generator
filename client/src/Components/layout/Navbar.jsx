import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <>
   <nav className='flex justify-between items-center  px-6 py-4'>
        <h1 className='text-xl font-semibold'>Daily Quotes Generator</h1>
        <ul className='flex gap-6 text-base'>
            <li className='cursor-pointer hover:underline'><Link to="/">Home</Link></li>
            <li className='cursor-pointer hover:underline'><Link to={"/api/quotes"} >Quotes</Link> </li>
            <li className='cursor-pointer hover:underline'>Contact Us</li>
            <li className='cursor-pointer hover:underline'> <Link to="/login">Login</Link></li>
        </ul>
   </nav>
    </>
  )
}

export default Navbar