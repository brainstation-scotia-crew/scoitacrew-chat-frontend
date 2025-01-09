import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import './pages/PageOne/PageOne';
import PageOne from './pages/PageOne/PageOne';

function App() {

  return (
    <BrowserRouter>
    {/* <ScrollToTop/> */}
    <Routes>
      <Route path="/" element={<PageOne/>}/>
    </Routes>
    {/* <Footer/> */}
  </BrowserRouter>
  )
}

export default App
