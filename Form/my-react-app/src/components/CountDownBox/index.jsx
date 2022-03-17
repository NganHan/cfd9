import { useState } from "react";
import styles from './style.module.scss';
import './style.css'
export function CountDownBox(props){
    const [count, setCount] = useState(10)
    const [count2, setCount2] = useState(10)
    const _OnClick = () => {
        setCount(count+1)
    }
    // useEffect(() => {
    //     console.log('useEffect');
    // }, [count2])
    // console.log('re-render');

    return(
        <div style = {{
            color: '#fff',
            background: props.color
            }}
            className={styles.test}
        >
            {count}
            <button onClick={_OnClick}>Click</button>
            {/* <button onClick={() => setCount(count2 + 1)}>Click 2</button> */}
        </div>
    )
}
export default CountDownBox;