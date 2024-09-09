import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

function ProjectItem({project}) {
    const router = useRouter();

    useEffect(()=>{
        console.log(project.role)
    })
  return (
    <div className="card bg-base-100 w-90 shadow-xl">
            <figure>
                <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{project.title}</h2>                
                <h3 className='font-semibold'>{project.challenge}</h3>
                <p>{project.desc}</p>

                <div className='team'>
                    <h1 className='font-bold'>Team Size</h1>
                    <p>{project.team}</p>
                </div>

                <div className='role'>
                    <h1 className='font-bold'>Role</h1>
                    {project.role.map((item, index)=>(
                        <span key={index} className='mr-2'>{item}</span>
                    ))}
                </div>
    
                <div className='tech flex gap-3 mb-2'>
                    {project.tech.map((item, index)=>(
                        <span key={index} className='font-semibold'>{item}</span>
                    ))}
                </div>
                
                <div className="card-actions justify-end">
                <button className="btn btn-primary" onClick={()=>window.location.href=project.github}>Github</button>
                <button className="btn btn-primary">Video Demo</button>
                </div>
            </div>
    </div>
  )
}

export default ProjectItem