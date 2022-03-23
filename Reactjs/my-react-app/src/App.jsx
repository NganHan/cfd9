import { useEffect, useState } from 'react'
// import Accodion from './components/Accodion'
import CountDown from './components/CountDown'
import ToDoList from './components/ToDoList'
import MainLayout from './layouts/MainLayout'
import './assets/dest/fonts.css'
import './assets/dest/style.min.css'
import './assets/dest/stylefinal.min.css'
import './assets/dest/stylelibs.min.css'
import './assets/style/style.scss'
import Register from './pages/Register'
import Home from './pages/Home'
import Page404 from './pages/Page404'
import Course from './pages/Course'
import { Route, Routes } from 'react-router-dom'
import Profile from './pages/Profile'
import ProfilePayment from './pages/Profile/Payment'
import ProfileProject from './pages/Profile/Project'
import Coin from './pages/Profile/Coin'
import Info from './pages/Profile/Info'
import Team from './pages/Team'
import CourseDetail from './pages/Course/CourseDetail'
import {COURSE_DETAIL_PATH, COURSE_REGISTER_PATH, HOME_PATH} from './constants/path'

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
      {/* <CountDown color="red"/>
      <CountDown color="black"/> */}
      <hr />
      {/* <Accodion /> */}
      {/* <ToDoList 
        toDoList={toDoList}
        handleAdd={handleAdd}
        handleComplete = {handleComplete}
      /> */}
      {/* <RegisterForm /> */}

      <Routes>
        <Route element = {<MainLayout />}>
          <Route path={HOME_PATH} element={<Home />}/>
          <Route path="/khoa-hoc" element={<Course />}/>
          <Route path={COURSE_DETAIL_PATH} element={<CourseDetail />}/>
          <Route path={COURSE_REGISTER_PATH} element={<Register />}/>
          <Route path="/team" element={<Team />}/>
          <Route path="/ca-nhan" element={<Profile path = "/ca-nhan"/>}>
            <Route index element={<Info />}/>
            <Route path="khoa-hoc" element={<Course />}>
              <Route path="coin" element={<Coin />}/>
              <Route path="thanh-toan" element={<ProfilePayment />}/>
            </Route>
            <Route path="coin" element={<Coin />}/>
            <Route path="thanh-toan" element={<ProfilePayment />}/>
            <Route path="du-an" element={<ProfileProject />}/>
          </Route>
          <Route path='*' element={<Page404 />} />
        </Route>
      </Routes>



      {/* <MainLayout> */}
        {/* <Home /> */}
        {/* <Page404 /> */}
        {/* <Course /> */}
        {/* <Register /> */}
      {/* </MainLayout> */}
    </div>
  )
}

export default App
