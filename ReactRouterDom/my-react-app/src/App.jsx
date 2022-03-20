import MainLayout from './layouts/MainLayout'
import './assets/dest/fonts.css'
import './assets/dest/style.min.css'
import './assets/dest/stylefinal.min.css'
import './assets/dest/stylelibs.min.css'
import './assets/dest/jsmain.min.js'
import './assets/js/main.js'
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
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element = {<MainLayout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/khoa-hoc" element={<Course />}/>
          <Route path="/khoa-hoc/:slug" element={<CourseDetail />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/team" element={<Team />}/>
          <Route path="/lien-he" element={<Contact />}/>
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
