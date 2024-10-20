import React from 'react'

const Camera = () => {
    return (
        <div className='flex justify-center bg-[#0C111D] h-[50px] w-[100px] rounded-lg' style={{position:'relative', left:"104px", bottom:"211px"}}>
        <div className='flex flex-col justify-center pr-1'>
            <div className='rounded-full bg-[#8ADEDB] w-4 h-4'>
            </div>
        </div>
            <p className=' text-white flex flex-col justify-center pr-1'>2:04</p>
            <div className='flex justify-center flex-col'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
            </div>
        </div>
    )
}

export default Camera
