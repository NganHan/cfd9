import React, {useState} from 'react'
import styles from './style.module.scss'

function ToDoList({toDoList, handleAdd, handleComplete}) {
    const [value, setValue] = useState('')
    const _handleAdd = () => {
        handleAdd(value);
        setValue('')
    }
    return (
        <div className={styles.toDoList}>
            <div className="input-group">
                <input type="text" value={value} onChange={ev => setValue(ev.target.value)} placeholder='Nhap cong viec....'/>
                <button disabled = {!value} onClick={_handleAdd}>Add</button>
            </div>
            <h1>Darhboard</h1>
            <div className="card-list">
                <div className="card">
                    <h2>Viec chua lam</h2>
                    {
                        toDoList.filter(e => !e.isComplete).map(e => <ToDoItem key = {e.id} {...e} handleComplete={() => handleComplete(e)}/>)
                    }
                </div>
                <div className="card">
                    <h2>Viec da lam</h2>
                    {
                        toDoList.filter(e => e.isComplete).map(e => <ToDoItem key = {e.id}  {...e}/>)
                    }
                </div>
            </div>
        </div>
    )
}

function ToDoItem({name, isComplete, handleComplete}){
    return(
        <div className={`to-do-item ${isComplete ? 'isCompltete' : ''}`}>
            <div className="name">{name}</div>
            <button onClick={handleComplete}>✓</button>
        </div>
    )
}

export default ToDoList
