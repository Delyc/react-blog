import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/NavBar/Navbar";
import code from"../assets/icons/code.png"
import post1 from"../assets/img/banner.jpeg"
import post2 from"../assets/img/tech.jpg"
import post3 from"../assets/img/back.jpg"
import tech from "../assets/img/logy.webp"
import { Link } from "react-router-dom";

function Hom() {
  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="overlay">
        </div>
      </div>
      <div className="test">
        <div className="code-blog">
        <img className="code" src={code} alt="" />
        <div className="blog-p">
        <h1 className="">Blog</h1>
        <p>Leveraging tech to drive a better IT experience</p>
        </div>      
        </div>
      </div>
      <div className="intro">
        <div className="tech-home">
         
          <h1>Tech forum</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
         
        </div>
        <div className="img-home">
          <img src={tech} alt="" />
        </div>
      </div>
      <div className="more-blogs">
      <div className="heading">
        <h1>Blog</h1>
        <div className="hr">
        <hr className="hr-second"/>
        <hr className="hr-first"/>
        </div>
        
        
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      <div className="articles">
        <article>
          <figure className="post-over">
            <img src={post1} alt="" />
            <figcaption className="overlay-p">
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> 

            </figcaption>
          </figure>
        </article>
  
        <article>
          <figure className="post-over">
            <img src={post2} alt="" />
            <figcaption className="overlay-p">
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> 

            </figcaption>
          </figure>
        </article>
        <article>
          <figure className="post-over">
            <img src={post3} alt="" />
            <figcaption className="overlay-p">
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> 

            </figcaption>
          </figure>
        </article>

      
        
        
      </div>
      <div className="more-blogs-btn">
      <button><Link className="Link" to="/blog"> More blogs</Link></button>
      </div>
      
      </div>

      <Footer />
    </div>
  );
}

export default Hom;
