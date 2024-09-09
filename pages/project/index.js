import ProjectItem from '@/components/ProjectItem'
import React, { useEffect, useState } from 'react'
import Project from '@/shared/Project'

function index() {
    const [project, setProject] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        if(project){
            setLoading(false);
            console.log(project)
        }
        else{
            setProject(Project.Project);
        }
    },[project])

    if(loading){
        return (
            <div>
                Loading...
            </div>
        )
    }
    return (
        <div className='w-full'>
            <h1 className='m-5 text-center font-bold text-[22px]'>My Project</h1>
            <div className='flex justify-center m-3'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                    {project.map((item, index) => (
                        <ProjectItem key={index} project={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default index