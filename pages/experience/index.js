import Competition from '@/components/Competition'
import React, { useEffect, useState } from 'react'
import Experience from '@/shared/Project'

function index() {
    const [competition, setCompetition] = useState();
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        if(!competition){
            setCompetition(Experience.Experience);
        }
        else{
            setLoading(false);
        }
    },[competition])

    if(loading){
        return
    }

    return (
        <div>
            <Competition competition={competition}/>
        </div>
    )
}

export default index