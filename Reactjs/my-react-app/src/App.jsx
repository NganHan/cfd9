import { useEffect, useState } from 'react'
// import Accodion from './components/Accodion'
import CountDown from './components/CountDown'
import ToDoList from './components/ToDoList'
// import CountDownBox from './components/CountDownBox'

const TODO_APP_KEY_STORAGE = 'TODO_APP'
function App() {
  const [toDoList, setToDoList] = useState([])

  useEffect(() => {
    const todoList = localStorage.getItem(TODO_APP_KEY_STORAGE)
    if(todoList){
      setToDoList(JSON.parse(todoList))
    }
  },[])

  useEffect(() => {
    localStorage.setItem(TODO_APP_KEY_STORAGE, JSON.stringify(toDoList))
  }, [toDoList])


  const handleAdd = (value) => {
    setToDoList([
      {
        id: Date.now() + '-' + Math.random(), //SINH RA 1 id NGAU NHIEN
        name: value,
        isComplete: false
      },
      ...toDoList // Copy lai tat ca GT cu
    ])
  }
  const handleComplete = (task) => {
    task.isComplete = true
    setToDoList([...toDoList])
  }
  return (
    <div className="App">
      {/* Reactjsssss */}
      {/* <CountDownBox color="red" init={1}/>
      <CountDownBox color="black" init={1}/> */}
      <CountDown color="red"/>
      <CountDown color="black"/>
      <hr />
      {/* <Accodion /> */}
      <ToDoList 
        toDoList={toDoList}
        handleAdd={handleAdd}
        handleComplete = {handleComplete}
        // toDoList = {[
        //   {
        //     id: 1,
        //     name: 'Cong viec A',
        //     isComplete: false
        //   },
        //   {
        //     id: 2,
        //     name: 'Cong viec B',
        //     isComplete: true
        //   }
        // ]}
      />
    </div>
  )
}

export default App
