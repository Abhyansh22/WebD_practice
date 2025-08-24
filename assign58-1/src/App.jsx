import React, { useState } from 'react'
import Nav from "./Nav"
import Footer from "./Footer"
import AllProducts from './AllProduct'
import { Route , Routes } from 'react-router'
import ProductDetails from "./Productdetails"
const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        
        <Route path='/' element={<AllProducts />}/>
        <Route path='/Productdetails' element={<ProductDetails />}/>
      </Routes>
     
      <Footer />
    </div>
  )
}

export default App
