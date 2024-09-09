import { useRouter } from 'next/router'
import React from 'react'

function Header() {
    const router = useRouter();

    return (
        <div className='border p-3 flex items-center justify-between'>
            <div className='font-bold text-[25px] ml-3'>
                Kai Sheng
            </div>
            <div className=''>
                <button className='mx-2 border px-3 py-2 rounded-xl' onClick={()=>{router.push('/')}}>
                    About
                </button>
                <button className='mx-2 border px-3 py-2 rounded-xl' onClick={()=>{router.push('/project')}}>
                    Project
                </button>
                <button className='mx-2 border px-3 py-2 rounded-xl' onClick={()=>{router.push('/experience')}}>
                    Experience
                </button>
            </div>
        </div>
    )
}

export default Header