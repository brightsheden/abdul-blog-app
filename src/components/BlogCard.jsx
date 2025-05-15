
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


export default BlogCard