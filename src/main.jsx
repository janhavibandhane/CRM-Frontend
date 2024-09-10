import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx';
import UserMeeting from './Component/User/UserMeeting.jsx';
import UserProfile from './Component/User/UserProfile.jsx';
import SignIn from './Component/HomePage/SignIn.jsx';
import Login from './Component/HomePage/Login.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Router>
          <Routes>
             <Route path='' element={<App />}></Route>
             <Route path='/user' element={<Layout />} >
                 <Route path='meeting' element={<UserMeeting />}></Route>
             </Route>
             <Route path='/signin' element={<SignIn/>}/>
             <Route path='/Profile' element={<UserProfile />}></Route>
             <Route path='/login' element={<Login />} />
             
          </Routes> 
    </Router>   
  </React.StrictMode>,
)
