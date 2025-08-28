import React, {useState} from "react";
import Product from "./Product";
import inventory from "./DummyData";

function ProductList(){
  const [query, setQuery] = useState("")
  const [selected, setSelected] = useState("default")


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

    return(
        <div className="flex flex-col">
            <div className='flex gap-4 self-end '>
                <input type='text'onChange={textChange} className='border-gray-200 border-2 rounded-md px-6' placeholder='Search'/>
                <select onChange={optionChange} className='border-gray-200 border-2 py-2 pl-3 pr-8 bg-gray-100 text-gray-600' name="sortTag">
                    <option value="default">Default Sorting</option>
                    <option value="title">Sort by title</option>
                    <option value="ltoh">Sort by price: low to high</option>
                    <option value="htol">Sort by price: high to low</option>
                </select>
            </div>
            <div className="flex flex-wrap justify-between grow">
                {filteredInventory.map(function(item){
                    return(<Product id={item.id} price={item.price} desc={item.desc} category={item.category} image={item.image}></Product>)
                })}
            </div>
        </div>
    )
}

export default ProductList