import React from 'react'

const EditTopicForm = () => {
  return (
    <form className='flex flex-col gap-3'>
    <input className='border border-slate-500 px-8 py-4 rounded p-3' placeholder='Title Topic' type='text'></input>
    <input className='border border-slate-500 px-8 py-4 rounded p-3' placeholder='Title Description' type='text'></input>
    <button className='p-4 w-fit bg-green-500 rounded font-semibold text-1xl text-white'>Update Topic</button>
   </form>
  )
}

export default EditTopicForm