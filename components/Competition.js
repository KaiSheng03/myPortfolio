import React, { useEffect } from 'react'
import ProjectItem from './ProjectItem'

function Competition({competition}) {
    useEffect(()=>{
        console.log(competition)
    })
  return (
    <div className='w-full'>
        <h1 className='text-center font-bold text-[22px] m-5'>Competition</h1>
        <div className='m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            {competition.map((item, index)=>(
                <ProjectItem key={index} project={item}/>
            ))}
        </div>
    </div>
  )
}

export default Competition