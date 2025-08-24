import React from 'react'

const ProductDetails = (info) => {
  return (
    <div className='flex  w-[80vw] m-auto mt-10  p-10 shadow-2xl'>
        <img className='w-[35vw] h-[65vh] object-cover' src="https://codeyogi.io/coffee-mug.jpeg" alt="Image" />
        <div className='flex flex-col gap-3 ml-10'>
            <h1 className='text-7xl font-bold'>Black Coffie Mug</h1>
            <p className='text-3xl font-bold'>$15.99</p>
            <p className='text-gray-600 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum deserunt explicabo pariatur eius unde dolores commodi laudantium. Officia ipsum temporibus ratione similique, ut maiores neque aspernatur itaque expedita vel quisquam?</p>
            <div>
                <input className='shadow w-10 h-10 text-center mr-5' type="text" value={1} />
                <button className='bg-orange-500 rounded w-50 h-10 text-white'>Add To Cart</button>
            </div>
            
        </div>

      
    </div>
  )
}

export default ProductDetails