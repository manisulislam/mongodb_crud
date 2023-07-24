'use client'
import React, { useEffect, useState } from 'react'
import DeleteBtn from './DeleteBtn'
import Link from 'next/link'
import {LuEdit} from 'react-icons/lu'

const getTopics=async()=>{
  try {
    const res= await fetch('http://localhost:3000/api/topics',{
      cache: "no-store"
    })
    if(!res.ok){
      throw new Error(" Failed to fetch");
    }
    return res.json()
    
  } catch (error) {
    console.log("Error loading topics", error);
    return [];
  }
}

const TopicsList = () => {
  const [topics, setTopics]=useState([]);
  
  useEffect(() => {
    const fetchTopics = async () => {
      const topicsData = await getTopics();
      setTopics(topicsData);
    };
    fetchTopics();
  }, []);
  return (
    <>
    {topics.length>0?(topics.map((t)=>{
       <div className='flex justify-between items-start border-2 p-4 rounded my-5 gap-5'>
       <div>
        <h1 className='text-2xl font-semibold'>{t.title}</h1>
        <div>{t.description}</div>
       </div>
       <div className='flex gap-2'>
        <DeleteBtn></DeleteBtn>
        <Link href={`/editTopic/${t._id}`}>
            <LuEdit size={25}></LuEdit>
        </Link>

       </div>
    </div>


    })): (<h1>Loading topics...</h1>)
   }
    
    </>
  )
}

export default TopicsList