import React from 'react'

const Headers = () => {
    return (
        <div className='flex flex-col justify-center'>
            <div className='flex flex-col justify-center items-center h-[250px] relative right-[230px] w-[2000px] mt-7 text-6xl text-center text-black'>
                Create <b className='text-blue-600'>Professional Videos</b> in Minutes with Avatars
            </div>
            <p className='text-center text-black'>Transform your text into engaging video content instantly, while saving time and cutting costs</p>

            <div className='mt-10'>

                <form className="max-w-md mx-auto">
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only ">Get a demo</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white " placeholder="Email" required />
                        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get a demo</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Headers
