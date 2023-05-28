import React from 'react'
import { Link } from 'react-router-dom'
import '../pages/home.css'



export const Home = () => {
  return (<div className='container'>
    <div className='image_home'><img src="https://images.pexels.com/photos/2255355/pexels-photo-2255355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="typing Image" /></div>

    <div className='title_home'><h1>Welcome To Typing Master</h1></div>

    <div className='para_home'><p>User-friendly tool designed to help users improve their typing skills and increase typing speed.
    To Continue click on Next... </p></div>



    


    <Link to='/about' className='next'><img src="https://as2.ftcdn.net/v2/jpg/02/73/23/45/1000_F_273234523_E01jxIZVTzObdHWeefGKhSHSelDhKJ9O.jpg " alt="" width={80} className='next_img' /></Link>


  

    

    </div>
  )
}
