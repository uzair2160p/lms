import React from 'react'

import StudentBackground from '../../public/student-bg.jpeg'
import TeacherBackground from '../../public/teacher-bg.jpeg'


const SignIn = () => {
    return (
        <div className='flex h-screen text-white'>
            <div className='w-1/2 h-full bg-black bg-opacity-75 bg-blend-multiply flex flex-col justify-center items-center' style={{backgroundImage: `url(${TeacherBackground})`}}>
                <div className='text-4xl'>Teacher's Sign In</div>
                <div className='pt-16 flex flex-col w-2/5 space-y-4'>
                    <input className='p-2 border-2 bg-black bg-opacity-25 rounded-md' placeholder='Enter your email' />
                    <input className='p-2 border-2 bg-black bg-opacity-25 rounded-md' placeholder='Enter your password' />
                </div>
                <div className='flex justify-between w-2/5 py-8 px-1'>
                    <div className='flex items-center'>
                        <input type='checkbox' />
                        <span className='text-sm'>Remember Me</span>
                    </div>
                    <div>
                        <button className='text-blue-200'>Forgot Password?</button>
                    </div>
                </div>
                <button className='w-2/5 bg-blue-200 py-4 rounded-md'>Log In</button>
                <div className='text-xl py-4'>OR</div>
                <button className='w-2/5 rounded-full bg-white text-blue-200 py-4'>Log In with Facebook</button>
                <button className='w-2/5 rounded-full bg-white text-orange-100 py-4 mt-4'>Log In with Office 365</button>
            </div>
            <div className='w-1/2 h-full bg-blue-200 bg-opacity-75 bg-blend-multiply flex flex-col justify-center items-center' style={{backgroundImage: `url(${StudentBackground})`}}>
                <div className='text-4xl'>Students</div>
                <div className='text-lg'>Join a Lesson</div>
                <input className='p-2 border-2 bg-blue-200 bg-opacity-25 w-2/5 mt-16 mb-4 rounded-md' placeholder='Enter your email' />
                <button className='w-2/5 bg-white text-blue-200 py-4 mt-2 rounded-md'>Join</button>
                <div className='text-xl py-4 mt-6 mb-4'>OR</div>
                <button className='w-2/5 rounded-full bg-white text-blue-200 py-4'>Log In with Facebook</button>
                <button className='w-2/5 rounded-full bg-white text-orange-100 py-4 mt-4'>Log In with Office 365</button>
            </div>
        </div>
    )
}

export default SignIn
