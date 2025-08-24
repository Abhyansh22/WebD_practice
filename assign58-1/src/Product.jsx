import React from 'react'
import { Link } from 'react-router'


const Product = (info) => {
  return (
    <div className='w-[300px] shadow m-5 gap-1 flex flex-col p-2'>
      <img className='w-[100%] h-[300px] object-cover' src= {info.img} alt="" />
      <p className='text-gray-400 text-xs'>{info.category}</p>
      <h1 className='font-bold'>{info.title}</h1>
      <p>${info.price}</p>
      <Link to="/Productdetails" className='underline font-semibold'>View Details</Link>
    </div>
  )
}

export default Product