import React from 'react'

function TableRow (props) {
  return (
    <div>
      <p className='m-3'>{props.number} x {props.index} = {props.number*props.index}</p>
    </div>
  )
}

export default TableRow