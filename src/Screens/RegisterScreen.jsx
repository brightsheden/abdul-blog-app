import React, { useState } from 'react'

function RegisterScreen() {
    const [email, setEmail] =  useState()
    const [username, setUsername] =  useState()
    const [password, setPassword] =  useState()

    const SubmitHandler = (e)=>{
        e.preventDefault()
        console.log(email, password)
    }


  return (
    <div className='flex container mx-auto justify-center items-center min-h-screen'>

        <div className=' w-[956px]'>
            {/* lgin header */}
            <div className='text-center  mb-5'>
                <h2 className='font-bold text-1xl'>Welcome back</h2>
                <span className='text-xs'>Please, log in to your account.</span>
            </div>

            {/* form div*/}
            <form className='space-y-4 p-2' onSubmit={SubmitHandler}>
            <div className='space-y-4 w-full'>
                    <label className='font-bold mb-8'>Username</label>
                    <div className='mt-2 w-full'>
                    <input type="text" placeholder="Type here" className="input w-full" value={username} onChange={e => setUsername(e.target.value)} />
                    </div>

                </div>
                <div className='space-y-4 w-full'>
                    <label className='font-bold mb-8'>Email</label>
                    <div className='mt-2 w-full'>
                    <input type="email" placeholder="Type here" className="input w-full" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>

                </div>

                <div className='space-y-4'>
                    <label className='font-bold mb-8'>Password</label>
                    <div className='mt-2 w-full'>
                    <input type="password" placeholder="Type here" className="input w-full"  value={password} onChange={e => setPassword(e.target.value)} />
                    </div>

                </div>

                <div className='flex justify-between items-center'>
                    <span>
                        <input type='checkbox' className=''/>
                    </span>

                    <span className='link text-sm'>forgot password</span>
                </div>

                <div>
                    <button className='btn w-full bg-blue-800 text-white my-3 rounded-md'>Register</button>
                </div>
            </form>
        </div>

      
    </div>
  )
}

export default RegisterScreen
