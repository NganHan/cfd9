import React from 'react'
import { useState, useEffect } from 'react'

export function CountDown(props) {
    const [count, setCount] = useState(10) 
    // const [count2, setCount2] = useState(10) 

    useEffect(() => {
        console.log('useEffect');
    },[count]);

    // const _onClick = () => {
    //     console.log('on click');
    //     setCount(count+1)
    // }
    console.log('re-render');
    return (
        <div style={{
            width: 200,
            height: 200,
            background: props.color,
            marginBottom: 10,
            color: '#fff',
            fontSize: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {count}
            <button onClick={() => setCount(count + 1)}>Click1</button>
            <button onClick={() => setCount(count - 1)}>Click2</button>
        </div>
    )
}

export default CountDown
