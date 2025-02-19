import { useEffect, useState } from 'react'

import './App.css'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Home from './home/home'
import Login from './home/Login'
import Register from './home/register'

function App() {
 
 
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login'  element={<Login />} />
        <Route path='/register'  element={<Register />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
