import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Add() {
    const navigate = useNavigate()
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [phone , setPhone]  = useState('')
    const createUser = () => {
        try {
          axios
            .post("http://localhost:5000/api/user/add", {
              name: name,
              email: email,
              phone: phone,
            })
            .then((response) => console.log(response))
            .catch((err) => console.error(err));
            navigate('/')
            window.location.reload() ;
        } catch (error) {
          console.log(error);
        }
      };
  return (
    <div className='ml-64 p-4'>
        <h2 className='font-bold text-3xl text-white'>Add New User</h2>
        <div className='mt-4 p-2'>
            <div className='flex flex-col justify-start items-start gap-2'>
                <label className='text-white text-lg' htmlFor="">User Name</label>
                <input  onChange={(e)=>setName(e.target.value)} className='bg-black text-white border-white border py-3 px-2 rounded-xl' type="text" placeholder='Name' required />
            </div>
            <di className="flex mt-3 flex-col justify-start items-start gap-2">
                <label className='text-white text-lg' htmlFor="">User Email</label>
                <input onChange={(e)=>setEmail(e.target.value)} className='bg-black text-white border-white border py-3 px-2 rounded-xl' type="email" placeholder='Email' required />
            </di>
            <div className='flex mt-3 flex-col justify-start items-start gap-2'>
                <label className='text-white text-lg' htmlFor="">User Phone</label>
                <input onChange={(e)=>setPhone(e.target.value)} className='bg-black text-white border-white border py-3 px-2 rounded-xl' type="text" placeholder='Phone' required />
            </div>
            <div>
                <button className='border-yellow-600 border-4 rounded-xl py-3 px-20 text-white mt-3' onClick={()=>createUser()}>Create</button>
            </div>
        </div>
</div>
  )
}
