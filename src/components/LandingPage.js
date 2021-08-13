import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../public/logo.png'
import Hamburger from '../../public/hamburger.svg'
import ChildTop from '../../public/child-top.jpeg'
import ChildBottom from '../../public/child-bot.jpeg'


const NavBar = () => {
    const [sidebarToggle, setSidebarToggle] = useState(false)

    const toggleSidebar = () => {
        console.log('toggled')
        setSidebarToggle(!sidebarToggle)
    }

    return (
        <div>
            <div className='navbar flex h-24 text-sm items-center justify-between px-6 bg-blue-200 text-white'>
                <div>
                    <img className='h-16 w-auto' src={Logo} alt='SHG' />
                </div>
                <div className='space-x-4 flex items-center'>
                    <button className='px-6 py-2 border-2 hover:bg-blue-100 border-white rounded-full'>
                        <Link to='/admin-login'>Admin Sign In</Link>
                    </button>
                    <button className='px-6 py-2 border-2 hover:bg-blue-100 border-white rounded-full'>
                        <Link to='/quote'>Request a Quote</Link>
                    </button>
                    <button className='px-6 py-2 border-2 hover:bg-green-500 border-white rounded-full'>
                        <Link to='/signup'>Sign Up for Free</Link>
                    </button>
                    <button className='px-6 py-2 border-2 bg-golden-100 hover:bg-golden-200 border-white rounded-full'>
                        <Link to='/signin'>Sign In</Link>
                    </button>
                    <button onClick={toggleSidebar}>
                        <img className='h-4' src={Hamburger} />
                    </button>
                </div>
            </div>
            <div className={`absolute h-screen w-1/5 top-0 right-0 px-6 py-8 bg-blue-200 bg-opacity-75 text-white text-xl space-y-4 ${sidebarToggle ? 'block' : 'hidden'}`}>
                <div className='flex justify-end py-2'>
                    <svg className='h-6 fill-current cursor-pointer' viewBox='0 0 20 20' onClick={toggleSidebar}>
                        <path d='M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z'></path>
                    </svg>
                </div>
                <div className='flex space-x-2'>
                    <svg className='h-6 fill-current' viewBox='0 0 20 20'>
                        <path d='M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589'></path>
                    </svg>
                    Singapore
                </div>
                <div className='pl-2'><Link to='/signin'>Sign In</Link></div>
                <div className='pl-2'><Link to='/signup'>Sign Up</Link></div>
                <div className='pl-2'><Link to='/pricing'>Pricing</Link></div>
                <div className='pl-2'><Link to='/blog'>Blog</Link></div>
            </div>
        </div>
    )
}


const LandingPage = () => {
    return (
        <div className='h-screen'>
            <NavBar />
            <div className='bg-blue-100 min-h-3/4 text-white'>
                <div className='grid grid-cols-2 px-24 py-6 items-center'>
                    <div className='pr-8'>
                        <div className='text-5xl'>You’ll wonder how you taught without it</div>
                        <div className='text-xl pt-4 pr-16'>Engaging media and formative assessments to make every lesson interactive.</div>
                    </div>
                    <div className='flex flex-col items-center justify-content'>
                        <img className='h-40 w-40 rounded-lg transform translate-y-12' src={ChildTop} />
                        <img className='h-60 w-60 rounded-lg transform' src={ChildBottom} />
                    </div>
                </div>
                <div className='flex space-x-16 px-24 py-8'>
                    <div className='h-36 w-60 bg-white rounded-md text-blue-200 space-y-2 flex flex-col items-center justify-center shadow-lg'>
                        <div className='font-bold'>Students</div>
                        <input placeholder='ENTER CODE' className='w-3/4 px-8 py-2 border-2 border-blue-200 rounded-full' />
                        <div>To Join a Lesson</div>
                    </div>
                    <div className='h-36 w-60 bg-white rounded-md text-blue-200 space-y-2 flex flex-col items-center justify-center shadow-lg'>
                        <div className='font-bold'>Teachers</div>
                        <button className='bg-blue-200 text-white py-2 px-6 rounded-full'>Sign Up for Free</button>
                        <div>or Log In</div>
                    </div>
                    <div className='h-36 w-60 bg-white rounded-md text-blue-200 space-y-2 flex flex-col items-center justify-center shadow-lg'>
                        <div className='font-bold'>Administrators</div>
                        <button className='bg-blue-200 text-white py-2 px-6 rounded-full'>Discover More</button>
                        <div>or Request a Quote</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LandingPage
