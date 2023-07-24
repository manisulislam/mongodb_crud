'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

const AddTopic = () => {
  const [title, setTitle]= useState("");
  const [description, setDescription]=useState(" ");
  const router= useRouter();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!title || !description){
      alert("title and description are required");
      return;
    }
    try {
      const res = await fetch('http://localhost:3000/api/topics',{
        method: "POST",
        headers:{
          "content-type": "application/json"
        },
        body: JSON.stringify({title, description}),
      })
      if(res.ok){
        router.push("/")
      }
      else {
        throw new error ("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }

  }
  return (
   <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
    <input
    onChange={(e)=>setTitle(e.target.value)}
    value={title}
    className='border border-slate-500 px-8 py-4 rounded p-3' placeholder='Title Topic' type='text'></input>
    <input
     onChange={(e)=>setDescription(e.target.value)}
     value={description}
    className='border border-slate-500 px-8 py-4 rounded p-3' placeholder='Title Description' type='text'></input>
    <button type="submit" className='p-4 w-fit bg-green-500 rounded font-semibold text-1xl text-white'>Add Topic</button>
   </form>
  )
}

export default AddTopic