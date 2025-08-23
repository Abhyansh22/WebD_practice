import React, {useState} from "react";


function Button({next,re}){
    return(
        <div className="flex gap-2">
            <button onClick={next} className='bg-blue-500 rounded-md p-2'>Next</button>
            <button onClick={re} className='bg-blue-500 rounded-md p-2'>Reset</button>
        </div>
    )
}

export default Button