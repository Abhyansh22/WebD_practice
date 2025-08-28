import React from "react";
import { useParams } from "react-router-dom";
import inventory from "./DummyData";
import ProductCard from './ProductCard'

function ProductDetail(){
    const identifier = useParams()
    //console.log(identifier)
    const filtered = inventory.filter(function(item){
        return item.id==identifier.id? true:false
    })
    //console.log("filtered array: ",filtered)
    return(
        <div >
            <ProductCard description={filtered[0]}></ProductCard>
        </div>
    )
}
export default ProductDetail