import React from 'react'
import Sidebar from './Components/Sidebar'
import { Routes , Route } from 'react-router-dom'
import Home from './Components/Home'
import Add from './Components/Add'
import Edit from './Components/Edit'
import Logout from './Components/Logout'
export default function App() {
  return (
    <div>
      <Sidebar/>
      <Routes>
        <Route path='/add' element={<Add/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/edit' element={<Edit/>}></Route>
        <Route path='/logout' element={<Logout/>}></Route>
      </Routes>
    </div>
  )
}
