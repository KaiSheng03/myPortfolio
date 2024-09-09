import React, { useEffect, useReducer, useState } from 'react'
import Project from '@/shared/Project'
import { useRouter } from 'next/router';

function Skillset() {
    const [skill, setSkill] = useState();
    const router = useRouter();

    useEffect(()=>{
        setSkill(Project.Skill);
    },[])

    if(!skill){
        return
    }
    
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* <img
                src="../public/images/mksProfile.jpg"
                className="max-w-sm rounded-lg shadow-2xl" /> */}
                <div>
                <h1 className="text-5xl font-bold">MAN KAI SHENG</h1>
                <p className="py-6">
                    Third Year Electrical Engineering Student in University Malaya
                </p>
                <div className='mb-3'>
                    <h1 className='font-bold text-[20px] mb-1'>Skillset</h1>
                    
                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                        {skill.map((item, index)=>(
                            <div key={index} className='mb-3'>
                                <h1 className='font-bold'>{item.category}</h1>
                                {item.skill.map((item, index)=>(
                                    <div key={index} className='grid grid-cols-3'>
                                        <div className='col'>
                                            <span>{item.name}</span>
                                        </div>
                                        <div className='col'>
                                            <span>{item.year} Years</span>
                                        </div>
                                        <div className='col'>
                                            {Array.from({ length: item.proficiency }).map((_, i) => (
                                                <span key={i}>★</span>
                                            ))}                                    
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    
                </div>
                <button className="btn btn-primary" onClick={()=>router.push('/project')}>Discover Projects</button>
                </div>
            </div>
        </div>
    )
}

export default Skillset