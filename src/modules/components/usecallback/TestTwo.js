import React, { useEffect, useState } from 'react'

const TestTwo = ({getItem}) => {
    const [items, setItems] = useState([])

    useEffect(()=>{
        console.log("item fetching")
        setItems(getItem());
    },[getItem]);
  return (
    <div>
        {items.map((item)=><div key={item}>{item}</div>)}
        
    </div>
  )
}
export default TestTwo