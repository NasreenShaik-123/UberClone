import React from 'react'
import {Link} from 'react-router-dom'
const Start= ()=>{
    return(
       
        <div className='grid grid-cols-1 md:grid-cols-3'>
              <div className="hidden md:block"></div>
            <div className=' bg-cover  h-screen flex justify-between flex-col w-full  bg-[url(https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2024/09/ubertaxiillustration2red-17272658475654.svg)] '>    
              <img className='w-14 ml-8' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"></img>
              <div className='bg-white py-4 px-4'>
                  <h2 clasName='text-3xl font-bold '>Get Started with Uber</h2>
                  <Link to='/login' className=' flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>                                   
              </div>
            </div>
            <div className="hidden md:block"></div>
        </div>
       
    )
}

export default Start