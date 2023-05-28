import React from "react";
import { Link } from "react-router-dom";
import './home.css'

export const PageAbout = () => {
  return (<div className='container'>
  <div className='image_home'><img src="https://onlinetyping.org/typing-lessons/images/fingers-on-home-row.png" alt="typing Image" /></div>

  <div className='title_home'><h1>Finger Placement</h1></div>

  <div className='para_home'><p>This is how you have to put your fingers on different keys .
  To Continue practise Test  click on Next... </p></div>



  


  <Link to='/Test' className='next'><img src="https://as2.ftcdn.net/v2/jpg/02/73/23/45/1000_F_273234523_E01jxIZVTzObdHWeefGKhSHSelDhKJ9O.jpg " alt="" width={80} className='next_img' /></Link>




  

  </div>
);
};
