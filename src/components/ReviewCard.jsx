import React from 'react'

function ReviewCard() {
  return (
    <div className='border  rounded-md p-2'>
        <div className='flex   justify-between'>
            <div className='flex gap-2'>
            <img src='images/ai.jpeg' className='size-6 rounded-full' />
            <span className='font-bold text-xl'>Username</span>

            </div>
            <span>Today</span>

            
        </div>
        <div className='w-full'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi reiciendis minus necessitatibus labore odio distinctio veritatis optio, magnam quisquam officiis eius non, incidunt, tempore saepe ab nam doloribus laudantium vitae.
        </div>
      
    </div>
  )
}

export default ReviewCard
