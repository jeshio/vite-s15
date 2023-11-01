import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { FirstPage } from './pages/FirstPage'
import { SecondPage } from './pages/SecondPage'
import { NotFound } from './pages/NotFound'
import './App.css'
import { Navbar } from './Navbar'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
    
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/first' element={<FirstPage />}></Route>
      <Route path='/second' element={<SecondPage />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
    </>
  )
}

export default App
