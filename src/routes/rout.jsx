import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Home } from '../pages/home.jsx'
import { PageAbout } from '../pages/pageAbout.jsx'
import { Test } from '../pages/test/test.jsx'
import { Test1 } from '../pages/test/test1.jsx'
import { Test2 } from '../pages/test/test2.jsx'
import { Test3 } from '../pages/test/test3.jsx'





export const Rout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<PageAbout/>}/>
      <Route path="/Test" element={<Test/>}/>

      <Route path="/Test1" element={<Test1/>}/>
      <Route path="/Test2" element={<Test2/>}/>
      <Route path="/Test3" element={<Test3/>}/>

       
      
      

     


      
    </Routes>
  )
}
