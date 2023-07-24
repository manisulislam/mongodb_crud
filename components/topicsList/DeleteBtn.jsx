import React from 'react'
import {AiFillDelete} from 'react-icons/ai'

const DeleteBtn = () => {
  return (
    <button className='text-red-500'>
        <AiFillDelete size={25}></AiFillDelete>
    </button>
  )
}

export default DeleteBtn