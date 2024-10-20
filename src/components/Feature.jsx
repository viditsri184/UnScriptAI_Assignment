import React from 'react'
import Feature_left from './Feature_left'
import Camera from './Camera_left'
import Feature_right from './Feature_right'

const Feature = () => {
    return (
        <div className='flex flex-col items-center'>
            <div>

                <div className='flex items-center'>
                    <Feature_left />
                    <div className='flex items-center'>

                        <Camera />
                    </div>
                    <img src="1_A_89d50b587d.png.png" alt="" />
                </div>
            </div>
            <div>

                <div className='flex items-center'>
                    <img src="coins.png" alt="" />
                    <Feature_right />
                </div>
            </div>
            <div>

                <div className='flex items-center'>
                    <Feature_left />
                    <img src="div.relative (1).png" alt="" />
                </div>
            </div>
            <div>

                <div className='flex items-center'>
                    <img src="div.relative.png" alt="" />
                    <div className='flex items-center'>
                    </div>
                    <Feature_right />
                </div>
            </div>
        </div>
    )
}

export default Feature
