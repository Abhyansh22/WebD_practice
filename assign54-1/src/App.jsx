import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
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
          < Product price="15.00" desc="Transparent Coffee Mug" category="Mugs" image="https://www.ikea.com/in/en/images/products/ikea-365-mug-clear-glass__0713425_pe729518_s5.jpg" />
          < Product price="19.00" desc="Coffee Mug"  category="Mug "  image="https://pebel.in/cdn/shop/files/pastel_green_only.jpg?v=1752650632"/>
          < Product price="19.00" desc="Family Coffee Mug"  category="Mug "  image="https://www.pastelhome.in/cdn/shop/files/PHPinterest_3024x4032px_1.jpg?v=1712593508&width=1946"/>
          < Product price="19.00" desc="White Coffee Mug"  category="Mug "  image="https://www.indidecor.com/wp-content/uploads/2021/04/Funny-Personalized-Coffee-Mug-Hand-Drawn-for-her-9.jpg"/>
          < Product price="19.00" desc="Tea Mug"  category="Mug "  image="https://nutcaseshop.com/cdn/shop/products/NC-CUS-GLASSMUG-0020b.jpg?v=1673588855"/>
          < Product price="19.00" desc="Traditional Coffee Mug"  category="Mug "  image="https://cdn.vibecity.in/providers/63e609ba1095ba0012311f77/602d7356-f050-4905-b9cb-96d12bd1a0b8_3ab37662-5b34-4d55-bdc6-30c189f14057-3X.png"/>
          < Product price="19.00" desc="Girls Coffee Mug"  category="Mug "  image="https://www.zwende.com/cdn/shop/products/Ashie_Artworks_Homeware_Mugs_Yellow_Girls_Src_4.jpg?v=1659012652&width=900"/>
          < Product price="19.00" desc="Pink Coffee Mug"  category="Mug "  image="https://kaunteya.co/cdn/shop/products/04_b7699cb4-e5ed-4f21-b7a4-20b819cbe870.jpg?v=1642073965"/>
          < Product price="19.00" desc="Red Coffee Mug"  category="Mug "  image="https://www.ikea.com/in/en/images/products/ikea-365-mug-clear-glass__0713425_pe729518_s5.jpg"/>
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
