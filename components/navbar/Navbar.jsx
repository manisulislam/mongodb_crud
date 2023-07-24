import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
   <nav className='flex justify-between items-center bg-rose-300 p-4 rounded'>
     <Link href={"/"} className='font-semibold text-1xl'> CRUD OPERATION</Link>
     <Link href={"/addtopic"} className='p-2 rounded bg-white font-semibold text-1xl'> Add Topic</Link>
   </nav>
  )
}

export default Navbar