import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
    const [response , setResponse] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/api/user/all").then(response =>setResponse(response.data)).catch(err=>console.error(err))
    },[])
    const deleteUser =(id)=>{
      try {
        axios.delete(`http://localhost:5000/api/user/${id}`).then(response =>setResponse(response.data)).catch(err=>console.error(err))
        window.location.reload()
      } catch (error) {
        console.log(error)
      }
    }
    console.log(response)

  return (
    <div className='text-white md:lg:ml-64 p-4 '>
      <div className='flex items-center justify-between mx-4'>
        <h2 className='text-3xl font-bold'>Welcome to Dashboard</h2>
        <button className='border-[4px] hover:bg-yellow-600 hover:text-white duration-300 py-3 px-10 rounded-lg font-bold text-lg border-yellow-600' ><a href="/add"><i class="fa-solid fa-plus"></i> Add User</a></button>
      </div>
        <div className='mt-10'>
            <div className='flex  bg-gray-900 p-4 items-center justify-around '>
               <h2 className='w-52 text-xl'>Name</h2>
               <h2 className='w-52 text-xl'>Email</h2>
               <h2 className='w-52 text-xl'>Phone</h2>
               <h2 className='w-52 text-xl'>Created</h2>
               <h2 className='w-44'></h2>
            </div>
            {response ? response.map((e)=>(
              <div  className='flex bg-gray-900 overflow-x-auto p-4 items-center justify-around'>
                <h2 className='w-52 font-semibold  text-lg'>{e.name}</h2>
                <h2 className='w-52 font-semibold  text-lg'>{e.email}</h2>
                <h2 className='w-52 font-semibold  text-lg'>{e.phone}</h2>
                <h2>Created At : {e.createdAt.substr(0, 10)}</h2>
                <button onClick={()=>deleteUser(e._id)} className='text-red-500 fill-red-600'><i class="fa-solid fa-trash"></i></button>
                <Link to={`/edit?id=${e._id}`}><a  className='text-yellow-600 font-bold'>Edit</a></Link>
              </div>
            )) : (
              <h2>No Users Found</h2>
            )}
            <p className='pl-3 pt-3 font-bold text-lg'>{response.length} User(s) Found</p>
        </div>

    </div>
  )
}
