import { useEffect, useState } from 'react';
import './blog.css';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Blog() {

  const [blogs, setBlogs] = useState([]);

  async function getBlogs() {
    try {
      const { data } = await axios.get("/data/blogData.json");
      setBlogs(data);
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <section id='blogs' className='blogs'>
      <div className="container-fluid">
        <div className="row">
          <h4 className='section-title'>Our Blog</h4>
        </div>

        <div className="row mt-5">
          {blogs.length > 0 && blogs.map((blog) => (
            <div 
              key={blog.id} 
              className="blog mb-4 col-xl-3 col-md-6"
            >
              <article>
                <div className="post-img">
                  <img 
                    src={blog.thumbnail} 
                    alt={blog.title} 
                    className='img-fluid'
                  />
                </div>

                <p className='post-category'>{blog.category}</p>

                <h2 className='title'>
                  <a href="#">{blog.title}</a>
                </h2>

                <div className="d-flex align-items-center">
                  <img 
                    src={blog.author.image} 
                    alt={blog.author.name} 
                    className='img-fluid flex-shrink-0 post-author-img' 
                  />

                  <div className="post-meta">
                    <p className='post-author-list'>
                      {blog.author.name}
                    </p>
                    <p className='post-date'>
                      <time dateTime={blog.date}>
                        {blog.date}
                      </time>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
