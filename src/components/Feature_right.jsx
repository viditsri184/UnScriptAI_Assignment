import React from 'react'

const Feature_right = () => {
    return (
        <div className='flex justify-center'>
            <div className='flex flex-col items-center'>
                <div className='logo'>
                    <svg width="51" height="39" viewBox="0 0 51 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_204_846)">
                            <path d="M32.0496 0.686646H5.0152H4.93173C2.72259 0.686646 0.931732 2.47751 0.931732 4.68665V33.438C0.931732 35.6471 2.72258 37.438 4.93172 37.438H32.0496C34.2588 37.438 36.0496 35.6471 36.0496 33.4379V24.3708L49.1167 30.0877V7.22021L36.0496 12.9371V4.68664C36.0496 2.47751 34.2588 0.686646 32.0496 0.686646Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.36971 0.344971C3.29913 0.344971 -0.000732422 3.64483 -0.000732422 7.71541V29.7836C-0.000732422 33.8542 3.29913 37.154 7.36971 37.154H29.4379C33.5085 37.154 36.8083 33.8542 36.8083 29.7836V25.5723L45.6025 30.7022C47.5737 31.8521 50.0492 30.4302 50.0492 28.1482V9.35068C50.0492 7.06864 47.5737 5.64679 45.6025 6.79665L36.8083 11.9266V7.71541C36.8083 3.64483 33.5085 0.344971 29.4379 0.344971H7.36971ZM46.3584 29.4066L36.8083 23.8357V13.6632L46.3584 8.09231C47.3295 7.52578 48.5492 8.22632 48.5492 9.35068V28.1482C48.5492 29.2725 47.3295 29.9731 46.3584 29.4066ZM1.49927 7.71541C1.49927 4.47326 4.12756 1.84497 7.36971 1.84497H29.4379C32.68 1.84497 35.3083 4.47326 35.3083 7.71541V29.7836C35.3083 33.0257 32.68 35.654 29.4379 35.654H7.36971C4.12756 35.654 1.49927 33.0257 1.49927 29.7836V7.71541Z" fill="#0098FD" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.36971 0.344971C3.29913 0.344971 -0.000732422 3.64483 -0.000732422 7.71541V29.7836C-0.000732422 33.8542 3.29913 37.154 7.36971 37.154H29.4379C33.5085 37.154 36.8083 33.8542 36.8083 29.7836V25.5723L45.6025 30.7022C47.5737 31.8521 50.0492 30.4302 50.0492 28.1482V9.35068C50.0492 7.06864 47.5737 5.64679 45.6025 6.79665L36.8083 11.9266V7.71541C36.8083 3.64483 33.5085 0.344971 29.4379 0.344971H7.36971ZM46.3584 29.4066L36.8083 23.8357V13.6632L46.3584 8.09231C47.3295 7.52578 48.5492 8.22632 48.5492 9.35068V28.1482C48.5492 29.2725 47.3295 29.9731 46.3584 29.4066ZM1.49927 7.71541C1.49927 4.47326 4.12756 1.84497 7.36971 1.84497H29.4379C32.68 1.84497 35.3083 4.47326 35.3083 7.71541V29.7836C35.3083 33.0257 32.68 35.654 29.4379 35.654H7.36971C4.12756 35.654 1.49927 33.0257 1.49927 29.7836V7.71541Z" fill="url(#paint0_linear_204_846)" />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_204_846" x1="4.21139" y1="37.154" x2="56.1905" y2="23.1661" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#0158F7" />
                                <stop offset="1" stop-color="#7839EE" />
                            </linearGradient>
                            <clipPath id="clip0_204_846">
                                <rect width="51" height="38" fill="white" transform="translate(-0.000732422 0.344971)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className='title text-3xl font-semibold'>
                    <b className='text-blue-500'>Minutes,</b> not Hours.
                </div>
                <div className='description'>
                    <p className='w-[350px] mt-2 mb-2'>No need for lengthy processes like
                        filming, editing, or storyboarding,
                        content can be created in minutes
                        by simply providing a script.</p>
                </div>
                <div className='link flex'>
                    <p>Discover More.</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="blue" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>

                </div>
            </div>
        </div>
    )
}

export default Feature_right
