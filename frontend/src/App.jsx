import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FindEvents from './pages/FindEvents'
import FindTicket from './pages/FindTicket'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import CreateEvents from './pages/CreateEvents'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'

function App() {
   return (
    <div className='mx-4 sm:mx[10%]'>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/find-events' element={<FindEvents/>}/>
        <Route path='/find-events/:eventsType' element={<FindEvents/>}/>
        <Route path='/create-events' element={<CreateEvents/>}/>
        <Route path='/find-ticket' element={<FindTicket/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/my-profile' element={<MyProfile/>}/>
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
