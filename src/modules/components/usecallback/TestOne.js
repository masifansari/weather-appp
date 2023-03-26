import React, { useCallback, useState } from 'react'
import TestTwo from './TestTwo';

const TestOne = () => {
    const [light, setLight] = useState(true);
    const [input, setInput] = useState(1);

    const getItem = useCallback(()=>{
        return [input+10 , input+100]
     },[input])

    const theme={
        backgroundColor:light ? "white" : "black",
        color:light ? "black" : "white"
    };

  return (
    <div style={theme}>
        <input type="number" value={input} onChange={(event)=>setInput(event.target.value)}/>
        <button onClick={()=>setLight(prevLight=>!prevLight)}>
        {light?"dark mode":"light mode"}</button>
        <TestTwo getItem={getItem}/>
    </div>
  )
}

export default TestOne