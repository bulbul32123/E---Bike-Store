import React, { useState } from 'react'
import { data, productdata } from './data'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './pages/products/Product'
import Gallery from './pages/gallery/Gallery'
import Contact from './pages/contact/Contact'
import Login from './pages/login/Login'
import Cart from './components/Cart'
import Footer from './components/footer/Footer'

export default function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className='app h-full w-full relative 2xl:max-w-[1400px] mx-auto overflow-x-hidden'>
      <BrowserRouter>
        <Navbar setOpen={setOpen} />
        <Cart setOpen={setOpen} open={open} />
        <Routes>
          <Route path='/' element={<Home data={data} />} />
          <Route path='/product' element={<Product data={productdata} />} />
          <Route path='/gallery' element={<Gallery data={data} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
