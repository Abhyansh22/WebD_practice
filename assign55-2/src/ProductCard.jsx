import React from "react";

function ProductCard(){
    return(
            <div className="flex max-w-3xl mx-auto">
                <div className="w-1/2 bg-gray-100 p-8 flex items-center justify-center">
                    <img src="https://codeyogi.io/coffee-mug.jpeg" 
                         alt="Black Printed Coffee Mug" 
                         className="max-w-full h-auto object-contain" />
                </div>
                
                <div className="w-1/2 p-8 flex flex-col justify-center">
                    <h1 className="text-3xl font-medium text-gray-800 mb-4">Black Printed Coffee Mug</h1>
                    
                    <p className="text-2xl font-semibold text-gray-900 mb-6">$15.00</p>
                    
                    <p className="text-gray-600  mb-8">
                        Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. 
                        numquam eius modi tempora incidunt lores ta porro ame.
                    </p>
                    <div className="flex items-center gap-4">
                        <input type="number" defaultValue="1" min="1" className="w-16 px-3 py-2 border-2 border-black rounded-l-md text-center focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                        
                        <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
            )
}

export default ProductCard