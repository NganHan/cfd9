import React, {useState} from 'react'
import styles from './style.module.scss'

function ToDoList({toDoList, addValue, hanleComplete, handleBack}) {
    const [value, setValue] = useState('')
    const _addValue = () => {
        if(value){
            addValue(value)
        }
        setValue('')
    }
    const _onKeyUp = (ev) => {
        if(ev.key === 'Enter'){
            _addValue()
        }
    }
    return (
        <div className={styles.toDoList}>
            <div className="input-group">
                <input onKeyUp={_onKeyUp} value={value} onChange = {ev => setValue(ev.target.value)} type="text" placeholder='Nhap cong viec....'/>
                <button disabled={!value} onClick={_addValue}>Add</button>
            </div>
            <h1>Darhboard</h1>
            <div className="card-list">
                <div className="card">
                    <h2>Viec chua lam</h2>
                    {
                        toDoList.filter(e => !e.isComplete).map(e => <ToDoListItem key = {e.id} {...e} hanleComplete={() => hanleComplete(e)}/>)
                    }
                </div>
                <div className="card">
                    <h2>Viec da lam</h2>
                    {
                        toDoList.filter(e => e.isComplete).map(e => <ToDoListItem key = {e.id} {...e} handleBack={() => handleBack(e)} />)
                    }
                </div>
            </div>
        </div>
    )
}

function ToDoListItem({name, isComplete, hanleComplete, handleBack}){
    return(
        <div className={`to-do-item ${isComplete? 'isCompltete' : ''}`}>
            <div className="name">{name}</div>
            <button onClick={hanleComplete} className="icon-check">✓</button>
            <button className="icon-delete" onClick={handleBack}>␡</button>
        </div>
    )
}

export default ToDoList
