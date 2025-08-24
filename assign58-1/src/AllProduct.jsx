import React, { useState } from 'react'

import ProductList from "./ProductList"


const AllProducts = () => {
  const [query , setQuery] = useState('');
  const [sort , setSort] = useState('default');
  function handleQueryChange(event){
    let newQuery = event.target.value;
   
    setQuery(newQuery);
  }
  function handleSortChange(event){
    setSort(event.target.value);
  }
  
  const Alldata =[{
    price:"15.00",
    title:"Transparent Coffee Mug",
    category:"Mugs",
    img:"https://www.ikea.com/in/en/images/products/ikea-365-mug-clear-glass__0713425_pe729518_s5.jpg"
  },
  {
    price: "19.00",
    title: "Coffee Mug",
    category: "Mug ",
    img: "https://pebel.in/cdn/shop/files/pastel_green_only.jpg?v=1752650632"
  },
  {
    price: "29.00",
    title: "Family Coffee Mug",
    category: "Mug ",
    img: "https://www.pastelhome.in/cdn/shop/files/PHPinterest_3024x4032px_1.jpg?v=1712593508&width=1946"
  },
  {
    price: "43.00",
    title: "White Coffee Mug",
    category: "Mug ",
    img: "https://www.indidecor.com/wp-content/uploads/2021/04/Funny-Personalized-Coffee-Mug-Hand-Drawn-for-her-9.jpg"
  },
  {
    price: "14.00",
    title: "Tea Mug",
    category: "Mug ",
    img: "https://nutcaseshop.com/cdn/shop/products/NC-CUS-GLASSMUG-0020b.jpg?v=1673588855"
  },
  {
    price: "100.00",
    title: "Traditional Coffee Mug",
    category: "Mug ",
    img: "https://cdn.vibecity.in/providers/63e609ba1095ba0012311f77/602d7356-f050-4905-b9cb-96d12bd1a0b8_3ab37662-5b34-4d55-bdc6-30c189f14057-3X.png"
  },
  {
    price: "50.00",
    title: "Girls Coffee Mug",
    category: "Mug ",
    img: "https://www.zwende.com/cdn/shop/products/Ashie_Artworks_Homeware_Mugs_Yellow_Girls_Src_4.jpg?v=1659012652&width=900"
  },
  {
    price: "21.00",
    title: "Pink Coffee Mug",
    category: "Mug ",
    img: "https://kaunteya.co/cdn/shop/products/04_b7699cb4-e5ed-4f21-b7a4-20b819cbe870.jpg?v=1642073965"
  },
  {
    price: "99.00",
    title: "Red Coffee Mug",
    category: "Mug ",
    img: "https://wudbox.in/wp-content/uploads/2023/07/IMG_1259-4-scaled.jpg"
  }
]
  const data =Alldata.filter(function (items){
    if(items.title.toLowerCase().indexOf(query.toLowerCase())!=-1){
      return true;
    }else{
      return false;
    }
  })
  if(sort=="title"){
    data.sort(function(x,y){
      return (x.title < y.title) ? -1 : 1;
    })
  }else if(sort =="l2h"){
    data.sort(function(x,y){
      return parseInt(x.price)-parseInt(y.price);
    })
  }else if(sort =="h2l"){
    data.sort(function(x,y){
      return parseInt(y.price)-parseInt(x.price);
    })
  }
  console.log(data)
  return (
    <div className='flex flex-col'>
    
    <div className='flex flex-col grow  shadow-2xl self-center mt-10 mb-10 min-h-[68vh]'>
      <div className='flex justify-between'>
      <input onChange={handleQueryChange} type="text" placeholder='Search' className=' bg-blue-50 ml-22  pl-4 border-1 h-10 mt-3'/>
      <select onChange={handleSortChange} className='border p-1 pl-3 pr-10 bg-blue-50 mt-3 mr-3 w-auto mr-22'name="cars">
          <option value="default">Default Sort</option>
          <option value="title">Sort by title</option>
          <option value="l2h">Sort by price: low to high</option>
          <option value="h2l">Sort by price: high to low </option>
        </select>
      </div>
   <ProductList products={data}/>
    </div>
    
   </div>

  )
}

export default AllProducts