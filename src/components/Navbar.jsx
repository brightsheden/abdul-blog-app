import React from 'react'
import { Link } from 'react-router-dom'
import { FaBeer, FaSearch } from 'react-icons/fa';

function Navbar() {

  return (
    <div className='flex justify-between items-center  w-full p-2'>
        <div>
            Blog-App
        </div>
        <div>
            <ul className='flex justify-between gap-5'>
                <li>
                    <Link to={"register"}>Register</Link>
                </li>
                <li>
                    <Link to={"/login"}>Register</Link>
                </li>
            </ul>

        </div>

        <div>
            <form className='flex items-center justify-center space-x-3'>
                <span>
                    <FaSearch/>
                </span>
                <input className='input' placeholder='searcgh'/>
            </form>
        </div>
      
    </div>
  )
}

export default Navbar
