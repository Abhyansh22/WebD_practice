import React from "react";

function Product(data){
    return(
        <div className="w-72 m-5 gap-1 flex flex-col p-2">
            <img className="w-100% h-72 object-cover" src={data.image} alt=""/>
            <p className="text-gray-400 text-xs">{data.category}</p>
            <h3 className="font-bold">{data.desc}</h3>
            <p>{data.price}</p>
        </div>
    )

}

export default Product