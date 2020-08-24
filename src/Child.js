import React, { useContext } from 'react';
import CounterContext from './CounterContext'

const Child=(props)=>{
    let counterValue= useContext(CounterContext);
    console.log(counterValue);
    return (
        <div>
            <h2>This is first child using Counter Context</h2>
            <h1>{counterValue[0]}</h1>
            <button onClick={()=> {counterValue[1](++counterValue[0])} }>Increment Context</button>
        </div>
    )
}
export default Child;