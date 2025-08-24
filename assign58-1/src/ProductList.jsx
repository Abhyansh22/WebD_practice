import React from 'react'
import Product from './Product'

const ProductList = ({products}) => {
  return (
    <div className='flex flex-wrap w-[80vw]  justify-center'>
      {products.map(function(item){
        return <Product title={item.title} price={item.price} category={item.category} img={item.img} />
      })}
    </div>
  )
}

export default ProductList