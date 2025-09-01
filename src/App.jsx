 import { useState } from 'react'
import Home from './Home.jsx'
import About from './About.jsx'
import Services from './services.jsx'
import Works from './Works.jsx'
import Blog from './components/Blog.jsx';
import PushOutSlider from './testimonial.jsx'
import ToolsSlider from './slider.jsx'
import ContactForm from './contact.jsx'
import Footer from './footer.jsx'

function App() {
  

  return (
     <>
      <Home/> 
      <About/>
      <Services/>
      <Works/>
      <Blog/>
      {/* <PushOutSlider/> */}
      {/* <ToolsSlider/> */}
      <ContactForm/>
      <Footer/>

     

     </>
  )
}

export default App
 

 /* import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Services from './Services.jsx';
import Works from './Works.jsx';

import BlogList from './components/BlogList.jsx';       // latest 3 blogs
import BlogPage from './pages/BlogPage.jsx';            // all blogs
 import BlogDetail from './components/BlogDetail.jsx';    // full blog detail
 import Blog from './components/Blog.jsx';
 


function App() {
  return (
    <Router>
      <Routes>
         Homepage (includes your main sections) 
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Services />
              <Works />
              <Blog/>
             
            </>
          }
        />

         View all blogs 
        <Route path="/blogs" element={<BlogPage />} />

       Single blog post 
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}

export default App; */
 