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
import {COIN_PATH, CONTACT_PATH, COURSE_CHILD_PATH, COURSE_DETAIL_PATH, COURSE_PATH, COURSE_REGISTER_PATH, HOME_PATH, INFO_PATH, LOGIN_PATH, PAYMENT_PATH, PROJECT_PATH, REGISTER_PATH, TEAM_PATH} from './constants/path'
import Login from './pages/Login'
import Contact from './pages/Contact'
import CoursePage from './pages/CoursePage'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element = {<MainLayout />}>
          <Route path={HOME_PATH} element={<Home />}/>
          <Route path={COURSE_PATH} element={<CoursePage />}/>
          <Route path={COURSE_DETAIL_PATH} element={<CourseDetail />}/>
          <Route path={COURSE_REGISTER_PATH} element={<Register />}/>
          <Route path={TEAM_PATH} element={<Team />}/>
          <Route path={LOGIN_PATH} element={<Login />}/>
          <Route path={REGISTER_PATH} element={<Register />}/>
          <Route path={PAYMENT_PATH} element={<ProfilePayment />}/>
          <Route path={PROJECT_PATH} element={<ProfileProject />}/>
          <Route path={INFO_PATH} element={<Profile path = {INFO_PATH}/>}>
            <Route index element={<Info />}/>
            <Route path={COURSE_CHILD_PATH} element={<CoursePage />}></Route>
            <Route path={COIN_PATH} element={<Coin />}/>
            <Route path={PAYMENT_PATH} element={<ProfilePayment />}/>
            <Route path={PROJECT_PATH} element={<ProfileProject />}/>
          </Route>
          <Route path={CONTACT_PATH} element={<Contact />}></Route>
          <Route path='*' element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  )
}
export default App
