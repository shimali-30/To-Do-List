"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState(" ")
  const [desc, setdesc] = useState(" ")
  const [mainTask, setmainTask] = useState([])
  const submitHandler=(e)=>{
    e.preventDefault()
     setmainTask([...mainTask,{title,desc}])
     settitle("")
     setdesc("")
    console.log(mainTask)
  }
  const deleteHandler=(i)=>{
    let copyTask = [...mainTask]
     copyTask.splice(i,1)
     setmainTask(copyTask)
  }

  let renderTask = <h2 className='font-semibold'> No Task Available </h2>
  if(mainTask.length>0){
  renderTask = mainTask.map((t,i)=>{
    return <li key={i}className='flex items-center justify-between mb-5'>
      <div className=' mb-5 w-2/3'>
      <h5 className='text-2xl font-semibold'>{t.title}</h5>
      <p className='text-lg font-medium'>{t.desc}</p>
    </div>
    <button onClick={()=>{deleteHandler(i)}}
    className='bg-red-400 text-white py-2 rounded font-bold'>
      Delete</button>
    </li>
    
  })}
  return (
<>

<h1 className=' bg-black text-white p-5 text-5 font-bold text-center '
> My To Do List</h1>

<form onSubmit={submitHandler}>
  <input 
  type="text"
  className='text-2xl border-zinc-800 border-4 m-5 px-4 py-2'
  placeholder='Enter title here'
  value={title}
  onChange={(e)=>{
    settitle(e.target.value)

  }}
  >

  </input>
  <input 
  type="text"
  className='text-2xl border-zinc-800 border-4 m-5 px-4 py-2'
  placeholder='Enter Description here' 
  value={desc}
    onChange={(e)=>{
      setdesc(e.target.value)
    }
  }>
   

</input>
<button
 className='bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5'>
  Add Task
  </button>
</form>
<hr/>
<div className='p-5 bg-purple-200'>
  <ul>{renderTask}
  </ul>
</div>

</>
  )
}

export default page ;