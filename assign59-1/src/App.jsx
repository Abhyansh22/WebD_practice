import React,{ useState } from 'react'
import './App.css'
import ProductList from "./ProductList"
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import ProductCard from './ProductCard'
import Nav from "./Nav"
import Footer from './Footer'
import { Link } from 'react-router-dom'
import inventory from './DummyData'
import ProductDetail from './ProductDetail'

function App() {


  return (
    <div className="bg-gray-100 flex flex-col gap-20 overflow-x-clip">
      <Nav />
      <div className=' bg-white w-[75vw] self-center flex flex-col p-20 gap-5'>
        <div className='grow'>
          <Routes>
            <Route path="/" element={<ProductList />}></Route>
            <Route path="/ProductCard/:id" element={<ProductDetail/>}></Route>
          </Routes>
        </div>
        <div className='flex gap-2'>
          <a className="pt-2 px-4 border-red-500 border-2 hover:bg-red-500 hover:text-white" href="#">1</a>
          <a className="p-2 px-4 border-red-500 border-2 hover:bg-red-500 hover:text-white" href="#">2</a>
          <a className="p-2 px-4 border-red-500 border-2 hover:bg-red-500 hover:text-white" href="#">More</a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App