import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Component/HomePage/Nav'
import Middle from './Component/HomePage/Middle'
import Middle2 from './Component/HomePage/Middle2'
import Footer from './Component/HomePage/Footer'
import Header from './Component/HomePage/Header'
import UserNav from './Component/User/UserNav'
import Dashbord from './Component/User/Dashbord'
import UserProfile from './Component/User/UserProfile'
import UserMeeting from './Component/User/UserMeeting'
import SignIn from './Component/HomePage/SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav></Nav>
      <Middle />
      <Middle2 />
      <Header />
      <Footer />
     

      {/* <UserNav />
      <Dashbord />
      <UserMeetingPage /> */}
      {/* <UserProfile /> */}
      {/* <UserMeeting /> */}
    </>
  )
}

export default App