import { useEffect, useState } from 'react'
import ToDoList from './components/ToDoList'


function App() {
  const [toDoList, setToDoList] = useState([])
  const addValue = (value) => {
    setToDoList([
      {
        id: Date.now() + '-' + Math.random(),
        name: value,
        isComplete: false
      },
      ...toDoList
    ])
  }
  const hanleComplete = (task) => {
    task.isComplete = true
    setToDoList([...toDoList])
  }
  const handleBack = (task) => {
    task.isComplete = false
    setToDoList([...toDoList])
  }
  const TO_DO_LIST_STORAGE = 'TO_DO_LIST'
  useEffect(() => {
    const todoList = localStorage.getItem(TO_DO_LIST_STORAGE)
    if(todoList){
      setToDoList(JSON.parse(todoList))
    }
  },[])
  useEffect(() => {
    localStorage.setItem(TO_DO_LIST_STORAGE, JSON.stringify(toDoList))
  },[toDoList])
  return (
    <div className="App">
      <ToDoList 
        toDoList = {toDoList}
        addValue = {addValue}
        hanleComplete={hanleComplete}
        handleBack = {handleBack}
      />
    </div>
  )
}

export default App
