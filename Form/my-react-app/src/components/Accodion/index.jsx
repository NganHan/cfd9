import { useState, useEffect } from "react";
import './style.css';
export default function Accodion(props){
    const [isActive, setIsActive] = useState(false)
    return(
        <div>
            <h1 className="accordion" onClick={() => setIsActive(!isActive)}>Section 1</h1>
            <div className={`panel ${isActive ? 'active': ''}`}>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
        </div>
    )
}
