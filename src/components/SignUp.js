import React from 'react'
import { Link } from 'react-router-dom'

import StudentBackground from '../../public/student-bg.jpeg'
import TeacherBackground from '../../public/teacher-bg.jpeg'
import Lock from '../../public/lock.png'


const SignUp = () => {
    return (
        <div className='flex h-screen text-white'>
            <div className='w-1/2 h-full bg-black bg-opacity-75 bg-blend-multiply flex flex-col justify-center items-center' style={{backgroundImage: `url(${TeacherBackground})`}}>
                <div className='text-4xl'>Teacher's Sign Up</div>
                <div className='pt-16 flex flex-col w-2/5 space-y-4'>
                    <input className='p-2 border-2 bg-black bg-opacity-25 rounded-md' placeholder='First Name' />
                    <input className='p-2 border-2 bg-black bg-opacity-25 rounded-md' placeholder='Last Name' />
                    <input className='p-2 border-2 bg-black bg-opacity-25 rounded-md' placeholder='School Email' />
                    <input className='p-2 border-2 bg-black bg-opacity-25 rounded-md' placeholder='Password' />
                </div>
                <div className='flex justify-between w-2/5 py-8 px-1'>
                    <div className='flex items-center'>
                        <input type='checkbox' />
                        <span className='text-sm pl-2'>I agree T&Cs</span>
                    </div>
                </div>
                <button className='w-2/5 bg-blue-200 py-4 rounded-md'>Sign Up</button>
                <div className='text-xl py-4 flex space-x-2'>
                    <div>Already have account?</div>
                    <div className='text-blue-200'><Link to='/signin'>Sign In</Link></div>
                </div>                
            </div>
            <div className='w-1/2 h-full bg-blue-200 bg-opacity-75 bg-blend-multiply flex flex-col justify-center items-center' style={{backgroundImage: `url(${StudentBackground})`}}>
                <div className='text-4xl mt-20'>Students</div>
                <div className='text-lg'>Join a Lesson</div>
                <input className='p-2 border-2 bg-blue-200 bg-opacity-25 w-2/5 mt-16 mb-4 rounded-md' placeholder='Enter your email' />
                <button className='w-2/5 bg-white text-blue-200 py-4 mt-2 rounded-md'>Join</button>
                <div className='text-xl py-4 mt-6 mb-4'>OR</div>
                <button className='w-2/5 rounded-full bg-white text-blue-200 py-4'>Sign Up with Facebook</button>
                <button className='w-2/5 rounded-full bg-white text-orange-100 py-4 mt-4'>Sign Up with Office 365</button>
                <img className='h-40 mt-2' src={Lock} />
            </div>
        </div>
    )
}

export default SignUp
