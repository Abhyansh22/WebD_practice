import React,{ useState } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import ProductList from './ProductList'

function App() {
  const [query, setQuery] = useState("")
  const [selected, setSelected] = useState("default")

  const inventory=[{price:"15.00", desc:"White Coffee Mug", category:"Mugs", image:"https://codeyogi.io/coffee-mug.jpeg"} ,
          {price:"19.00", desc:"Blue Coffee Mug", category:"Mug", image:"https://trycasuals.ezyro.com/wp-content/uploads/2018/06/mug-blue.jpg"},
          {price:"15.00", desc:"Brown Coffee Mug",  category:"Mug", image:"https://trycasuals.ezyro.com/wp-content/uploads/2018/06/mug-coffee-600x600.jpg"},  
          {price:"34.00", desc:"Green Tshirt",  category:"Tshirt", image:"https://trycasuals.ezyro.com/wp-content/uploads/2018/06/tshirt5-600x600.jpg"},
          {price:"18.00", desc:"Yellor Coffee Mug",  category:"Mug", image:"https://trycasuals.ezyro.com/wp-content/uploads/2018/06/mug-yellow-600x600.jpg"},
          {price:"34.00", desc:"Light-Blue Tshirt",  category:"Tshirt", image:"https://trycasuals.ezyro.com/wp-content/uploads/2018/06/tshirt2-600x600.jpg"},  
          {price:"14.00", desc:"Red Coffee Mug",  category:"Mug", image:"https://trycasuals.ezyro.com/wp-content/uploads/2018/06/mug-red-600x600.jpg"}, 
          {price:"25.00", desc:"Orange Tshirt",  category:"Tshirt", image:"https://trycasuals.ezyro.com/wp-content/uploads/2018/06/tshirt7-600x600.jpg"}, 
          {price:"25.00", desc:"Blue Tshirt", category:"Tshirt", image:"https://trycasuals.ezyro.com/wp-content/uploads/2018/06/tshirt4-600x600.jpg"}];


  function optionChange(event){
    setSelected(event.target.value)
  }
  function textChange(event){
    setQuery((event.target.value).toLowerCase())
  }

  const filteredInventory =inventory.filter(function (item){
    if(item.desc.toLowerCase().indexOf(query)!=-1){
      return true;
    }else{
      return false;
    }
  })

  if (selected=="title"){
    filteredInventory.sort(function(x,y){
      return((x.category<y.category)?-1:1)
    })
  }else if(selected=="ltoh"){
    filteredInventory.sort(function(x,y){
      return((+x.price-(+y.price))<0 ?-1:1)
    })
  }else if(selected=="htol"){
    filteredInventory.sort(function(x,y){
      return((+x.price-(+y.price))>0 ?-1:1)
    })
  }

  return (
    <div className="bg-gray-100 flex flex-col gap-20 overflow-x-clip">
      <Nav />
      <div className=' bg-white w-[75vw] self-center flex flex-col p-20 gap-5'>
        <div className='flex gap-4 self-end '>
          <input type='text'onChange={textChange} className='border-gray-200 border-2 rounded-md px-6' placeholder='Search'/>
          <select onChange={optionChange} className='border-gray-200 border-2 py-2 pl-3 pr-8 bg-gray-100 text-gray-600' name="sortTag">
            <option value="default">Default Sorting</option>
            <option value="title">Sort by title</option>
            <option value="ltoh">Sort by price: low to high</option>
            <option value="htol">Sort by price: high to low</option>
          </select>
        </div>
        
        <div className='grow'>
          <ProductList products={filteredInventory}/>
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
