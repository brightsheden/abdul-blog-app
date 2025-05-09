import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

// BlogCard Component
function BlogCard({ title, description, image }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '16px', borderRadius: '8px' }}>
      <img 
        src={image} 
        alt={title} 
        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} 
      />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function HomeScreen() {
  const blogs = [
    { 
      title: 'Blog Post 1', 
      description: 'This is the description for blog post 1.', 
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
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
        <h2>Blogs</h2>
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