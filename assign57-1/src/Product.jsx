import React from "react";

function Product(data){
    return(
        <div className="w-72 m-5 gap-1 flex flex-col pb-5 grow">
            <img className="w-100% max-w-2xs h-72 object-cover" src={data.image} alt=""/>
            <p className="text-gray-400 text-xs">{data.category}</p>
            <h3 className="font-bold text-gray-600">{data.desc}</h3>
            <p className="text-gray-600">${data.price}</p>
        </div>
    )

}

export default Product