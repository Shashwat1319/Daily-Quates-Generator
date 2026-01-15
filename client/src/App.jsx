import { useState } from 'react'
import React from 'react'
import './App.css'
import Navbar from './Components/layout/Navbar'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from "./pages/Login"
import Signup from './pages/Signup'
import Quotes from './pages/section/Quotes'
function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/api/quotes' element={<Quotes/>}/>
    </Routes>
    </BrowserRouter>
    
    
    </>
  )
}

export default App
