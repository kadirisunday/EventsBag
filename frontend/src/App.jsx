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

function App() {
   return (
    <div className='mx-4 sm:mx[10%]'>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/find-events' element={<FindEvents/>}/>
        <Route path='/create-events' element={<CreateEvents/>}/>
        <Route path='/find-ticket' element={<FindTicket/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
