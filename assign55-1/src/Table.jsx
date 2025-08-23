import React,{useState} from 'react'
import TableRow from './Table-Row'
import Button from './Buttons';
const Table = () => {
    const [num,UpdateNum] = useState(2);
    function nextTable(){
        UpdateNum(num +1);
    }

    function resetTable(){
        UpdateNum(2);
    }
  return (

    <div>
        <Button next={nextTable} re={resetTable}></Button>
        <TableRow number={num} index={1}></TableRow>
        <TableRow number={num} index={2}></TableRow>
        <TableRow number={num} index={3}></TableRow>
        <TableRow number={num} index={4}></TableRow>
      
    </div>
  )
}

export default Table