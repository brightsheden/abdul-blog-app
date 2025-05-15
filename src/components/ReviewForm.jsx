import React from 'react'

function ReviewForm() {
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
  return (
    <form className='flex flex-col' onSubmit={handleSubmit}>
      <textarea className="textarea" placeholder="Bio" rows={"5"}></textarea>
      <button className='btn w-40'>send</button>
    </form>
  )
}

export default ReviewForm
