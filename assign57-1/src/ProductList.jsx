import React from "react";
import Product from "./Product";

function ProductList({products}){
    return(
        <div className="flex flex-wrap justify-between grow">
            {products.map(function(item){
                return(<Product price={item.price} desc={item.desc} category={item.category} image={item.image}></Product>)
            })}
        </div>
    )
}

export default ProductList