import React from 'react'
import Product from './product'
import Nav from './Nav'
import Footer from './Footer'

function App() {
  return (
    <div className="bg-gray-300 flex flex-col gap-8 overflow-x-clip">
      <Nav />
      <div className=' bg-white w-[75vw] self-center flex flex-col p-20'>
        <select className='border py-1 pl-3 pr-10 bg-gray-200 mt-3 mr-3 self-end'name="sortTag">
          <option vlaue="">Default Sorting</option>
        </select>
        <div className='flex flex-wrap justify-between'>
          < Product price="15.00" desc="White Coffee Mug" category="Mugs" image="https://codeyogi.io/coffee-mug.jpeg" />
          < Product price="19.00" desc="Blue Coffee Mug"  category="Mug "  image="https://trycasuals.ezyro.com/wp-content/uploads/2018/06/mug-blue.jpg"/>
          < Product price="15.00" desc="Brown Coffee Mug"  category="Mug "  image="https://trycasuals.ezyro.com/wp-content/uploads/2018/06/mug-coffee-600x600.jpg"/>
          < Product price="34.00" desc="Green Tshirt"  category="Tshirt"  image="https://trycasuals.ezyro.com/wp-content/uploads/2018/06/tshirt5-600x600.jpg"/>
          < Product price="18.00" desc="Yellor Coffee Mug"  category="Mug"  image="https://trycasuals.ezyro.com/wp-content/uploads/2018/06/mug-yellow-600x600.jpg"/>
          < Product price="34.00" desc="Light-Blue Tshirt"  category="Tshirt"  image="https://trycasuals.ezyro.com/wp-content/uploads/2018/06/tshirt2-600x600.jpg"/>
          < Product price="14.00" desc="Red Coffee Mug"  category="Mug"  image="https://trycasuals.ezyro.com/wp-content/uploads/2018/06/mug-red-600x600.jpg"/>
          < Product price="25.00" desc="Orange Tshirt"  category="Tshirt"  image="https://trycasuals.ezyro.com/wp-content/uploads/2018/06/tshirt7-600x600.jpg"/>
          < Product price="25.00" desc="Blue Tshirt"  category="Tshirt"  image="https://trycasuals.ezyro.com/wp-content/uploads/2018/06/tshirt4-600x600.jpg"/>
        </div>
        <div className='flex gap-2'>
          <a className="pt-2 px-3 border-red-500 border-2 hover:bg-red-500 hover:text-white" href="#">1</a>
          <a className="p-2 px-3 border-red-500 border-2 hover:bg-red-500 hover:text-white" href="#">2</a>
          <a className="p-2 border-red-500 border-2 hover:bg-red-500 hover:text-white" href="#">More</a>
        </div>
      </div>
      

      <Footer />
    </div>
  )
}

export default App
