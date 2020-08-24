import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer.js';

const Child2=()=>{

    let [state,dispatch]= useReducer(CounterReducer,0);

    console.log(state);
    return (
        <div>
            <h2>This is second child using Counter Reducer</h2>
            <h2> {state}</h2>
            <button onClick={()=>dispatch('INCREMENT')}>Increment Reducer</button>
        </div>
    )
}

export default Child2