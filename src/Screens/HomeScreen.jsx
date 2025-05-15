import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import BlogCard from '../components/BlogCard'


function HomeScreen() {
  const styles = {
    
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color:"red"
    
  }
  const blogs = [
    { 
      title: 'Blog Post 1', 
      description: 'This is the description for blog post 1.', 
      image: 'images/ai.jpeg' 
    },
    { 
      title: 'Blog Post 2', 
      description: 'This is the description for blog post 2.', 
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
    { 
      title: 'Blog Post 3', 
      description: 'This is the description for blog post 3.', 
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
  ]

  return (
    <div>
      <Navbar />
      <Hero />
      <div style={{ padding: '16px' }}>
        <h2 className={`text-4xl font-bold font-sans `}>Latest Blogs</h2>
        <div className='grid grid-cols-1 md:grid-cols-4 '>
          {blogs.map((blog, index) => (
            <BlogCard 
              key={index} 
              title={blog.title} 
              description={blog.description} 
              image={blog.image} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeScreen