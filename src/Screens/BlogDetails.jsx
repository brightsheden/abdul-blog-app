import React from 'react'
import BlogDetailHero from '../components/BlogDetailHero'
import ReviewCard from '../components/ReviewCard'
import ReviewForm from '../components/ReviewForm'


function BlogDetails() {
  return (
    <div>
        <BlogDetailHero/>

        <div className='min-h-screen p-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione officiis corrupti necessitatibus quas doloremque iste dolor nobis molestiae ea sint, provident accusantium. Doloribus quod aliquam delectus, magni laboriosam maxime natus.

          <div>
            <h2 className='font-bold text-2xl '>Reviewes</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            {[1,2,3,4,5].map(review => (
              <div key={review}>
                <ReviewCard/>
              </div>
            ))}
            </div>
<div className='mt-5'>
<ReviewForm/>
</div>
           
          </div>
        </div>
      
    </div>
  )
}

export default BlogDetails
