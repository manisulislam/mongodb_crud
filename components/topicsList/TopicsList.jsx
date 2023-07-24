import React from 'react'
import DeleteBtn from './DeleteBtn'
import Link from 'next/link'
import {LuEdit} from 'react-icons/lu'

const TopicsList = () => {
  return (
    <>
    <div className='flex justify-between items-start border-2 p-4 rounded my-5 gap-5'>
       <div>
        <h1 className='text-2xl font-semibold'>Topics Title</h1>
        <div>Descriptiion</div>
       </div>
       <div className='flex gap-2'>
        <DeleteBtn></DeleteBtn>
        <Link href={"/edittopic/123"}>
            <LuEdit size={25}></LuEdit>
        </Link>

       </div>
    </div>
    </>
  )
}

export default TopicsList