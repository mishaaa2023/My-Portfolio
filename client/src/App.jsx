import React from 'react'
import Home from './pages/Home'
import Error from './pages/Error'
import Blog from './pages/Blog'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import ContactForm from './components/ContactForm'
import Projects from './components/Projects'
import About from './components/About'



const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Home/>} index path='/'/>
      <Route element={<About/>} path='#about'/>
      <Route element={<Projects/>} path='#projects'/>
      <Route path='#contact' element={<ContactForm/>}/>
      <Route path='/blog'element={<Blog/>}/>
      <Route path='/*'element={<Error/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App