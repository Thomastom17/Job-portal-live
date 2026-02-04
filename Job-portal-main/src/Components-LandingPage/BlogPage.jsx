import React, { useState } from 'react'
import './BlogPage.css'
import blogheading from '../Assets/bloghead.png'
import bloghead1 from '../Assets/bloghead1.png'
import bloghead2 from '../Assets/bloghead2.png'
import bloghead3 from '../Assets/bloghead3.png'
import cat1 from '../Assets/cat1.png'
import cat2 from '../Assets/cat2.png'
import cat3 from '../Assets/cat3.png'
import cat4 from '../Assets/cat4.png'
import cat5 from '../Assets/cat5.png'
import cat6 from '../Assets/cat6.png'
import tech1 from '../Assets/tech1.png'
import tech2 from '../Assets/tech2.png'
import tech3 from '../Assets/tech3.png'
import tech4 from '../Assets/tech4.png'
import tech5 from '../Assets/tech5.png'
import tech6 from '../Assets/tech6.png'
import { useNavigate } from 'react-router-dom';
import { Footer } from '../Components-LandingPage/Footer';
import { Header } from '../Components-LandingPage/Header';
 
  const BlogPage = () => {
    // const [showMore, setShowMore] = useState(false);
    const navigate = useNavigate()
  return (
  <>
  <Header/>
 
  <div style={{marginTop:"150px"}} className='blogpage'>
  <img src={blogheading} alt="blogpage" width="1450px" padding="25px"/>
     
  </div>
 
  <div className='cat-con'>  
  <div className='container'>
 
  <div className='content'>
  <img src={bloghead1} alt="blog" width="300"/>  
  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptas sunt aspernatur excepturi? Iusto, vero.</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, quibusdam.</p>
 
  <button>Read more</button>
  <p className="extra-content">Lorem ipsum dolor sit amet...</p>
  <p className="extra-content">Lorem ipsum dolor sit amet...</p>
 
  </div>
 
  <div className='content' >
  <img src={bloghead2} alt="blog" width="300"/>  
  <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, nesciunt ea deleniti esse quo laborum!</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolores!</p>
  <button>Read more</button>
  <p className="extra-content">Lorem ipsum dolor sit amet...</p>
  <p className="extra-content">Lorem ipsum dolor sit amet...</p>
  </div>
 
  <div  className='content'>
  <img src={bloghead3} alt="blog" width="300"/>
  <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, nesciunt ea deleniti esse quo laborum!</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolores!</p>
  <button>Read more</button>
  <p className="extra-content">Lorem ipsum dolor sit amet...</p>
  <p className="extra-content">Lorem ipsum dolor sit amet...</p>
  </div>
 
  </div>
  </div>
 
  <div className='cat-con'>
  <div className='categories'>
  <h1>Categories</h1>
  <button onClick={()=>{navigate('/Job-portal-live/jobseeker/Blogs/Category')}} className='view-all'>viewall</button>
  </div>
   
  <div className='container'>
  <div className='content'>
  <img src={cat1} alt="blog" width="300"/>
  <h3 className='card-title'>career</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, quibusdam.</p>
  <button>Read more</button>
  <p className="extra-content">Lorem ipsum dolor sit amet...</p>
  <p className="extra-content">Lorem ipsum dolor sit amet...</p>
  </div>
 
  <div className='content'>
  <img src={cat2} alt="blog" width="300"/>
  <h3 className='card-title'>Onboarding</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolores!</p>
  <button>Read more</button>
  <p className="extra-content">Lorem ipsum dolor sit amet...</p>
  <p className="extra-content">Lorem ipsum dolor sit amet...</p>
  </div>
 
  <div className='content' >
  <img src={cat3} alt="blog" width="300"/>
  <h3 className='card-title'>tasks</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolores!</p>
  <button>Read more</button>
  <p className="extra-content">Lorem ipsum dolor sit amet...</p>
  <p className="extra-content">Lorem ipsum dolor sit amet...</p>
  </div>
 
  <div className='content'>
  <img src={cat4} alt="blog" width="300"/>
  <h3 className='card-title'>Worktype</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, quibusdam.</p>
  <button>Read more</button>
 <p className="extra-content">Lorem ipsum dolor sit amet...</p>
  <p className="extra-content">Lorem ipsum dolor sit amet...</p>
  </div>
 
  <div className='content'>
  <img src={cat5} alt="blog" width="300"/>
  <h3 className='card-title'>Meetings</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolores!</p>
  <button>Read more</button>
  <p className="extra-content">Lorem ipsum dolor sit amet...</p>
  <p className="extra-content">Lorem ipsum dolor sit amet...</p>
  </div>
 
  <div className='content'>
  <img src={cat6} alt="blog" width="300"/>
  <h3 className='card-title'>Environment</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolores!</p>
  <button>Read more</button>
  <p className="extra-content">Lorem ipsum dolor sit amet...</p>
  <p className="extra-content">Lorem ipsum dolor sit amet...</p>
  </div>
  </div>
  </div>
 
  <div className='cat-con'>
  <div className='categories'>
  <h1>Technology Blogs</h1>
  <button onClick={()=>{navigate('/Job-portal-live/jobseeker/Blogs/Technology')}} className='view-all'>viewall</button>
  </div>
   
 
     
  <div className='container'>
  <div className='content'>
  <img src={tech1} alt="blog" width="300"/>
  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptas sunt aspernatur excepturi? Iusto, vero.</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, quibusdam.</p>
  <button>Read more</button>
  <p className="extra-content">Lorem ipsum dolor sit amet...</p>
  <p className="extra-content">Lorem ipsum dolor sit amet...</p>
  </div>
 
  <div className='content'>
  <img src={tech2} alt="blog" width="300"/>
  <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, nesciunt ea deleniti esse quo laborum!</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolores!</p>
  <button>Read more</button>
  <p className="extra-content">Lorem ipsum dolor sit amet...</p>
  <p className="extra-content">Lorem ipsum dolor sit amet...</p>
  </div>
 
  <div className='content'>
  <img src={tech3} alt="blog" width="300"/>
  <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, nesciunt ea deleniti esse quo laborum!</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolores!</p>
  <button>Read more</button>
  <p className="extra-content">Lorem ipsum dolor sit amet...</p>
  <p className="extra-content">Lorem ipsum dolor sit amet...</p>
  </div>
   
     
 
  <div className='content'>
  <img src={tech4} alt="blog" width="300"/>
  <h3 >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil minima, non rem!</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, quibusdam.</p>
  <button>Read more</button>
  <p className="extra-content">Lorem ipsum dolor sit amet...</p>
  <p className="extra-content">Lorem ipsum dolor sit amet...</p>
  </div>
 
  <div className='content'>
  <img src={tech5} alt="blog" width="300"/>
  <h3 >Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatum cupiditate incidunt laborum amet molestiae.</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolores!</p>
  <button>Read more</button>
  <p className="extra-content">Lorem ipsum dolor sit amet...</p>
  <p className="extra-content">Lorem ipsum dolor sit amet...</p>
  </div>
 
  <div className='content'>
  <img src={tech6} alt="blog" width="300"/>
  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatum eligendi et velit nihil. Error.</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolores!</p>
  <button>Read more</button>
  <p className="extra-content">Lorem ipsum dolor sit amet...</p>
  <p className="extra-content">Lorem ipsum dolor sit amet...</p>
  </div>
  
  </div>
  </div>
     
  <Footer/>
   
 
 
  </>
  )
  }
 
 
  export default BlogPage