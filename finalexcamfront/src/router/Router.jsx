import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from '../pages/admin/Admin'
import Detail from '../pages/detail/Detail'
import Home from '../pages/home/Home'
import NotFaund from '../pages/notfaund/NotFaund'
import Wish from '../pages/wish/Wish'

const Router = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/wish' element={<Wish/>}/>
    <Route path='/admin' element={<Admin/>}/>
    <Route path='/detail' element={<Detail/>}/>
    <Route path='*' element={<NotFaund/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default Router