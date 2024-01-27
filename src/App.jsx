import React from 'react'
import Sidebar from './Components/Sidebar'
import { Routes , Route } from 'react-router-dom'
import Home from './Components/Home'
import Edit from './Components/Edit'
export default function App() {
  return (
    <div>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/edit' element={<Edit/>}></Route>
      </Routes>
    </div>
  )
}
