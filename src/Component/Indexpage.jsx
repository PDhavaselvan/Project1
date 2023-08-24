import React from 'react';
import rectangleImage from '../assets/Rectangle.png'; // Use the correct relative path
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/style.css';
import { Link, Outlet } from 'react-router-dom';
//import {image} from '../trucklahImage/Rectangle.png';
function Indexpage() {
  return (
    <>
      <div className="header sticky-top">
        <nav className="navbar navbar-expand-lg py-3 navbar-light   shadow p-3 mb-5">
          
          <div className="container">
          <img src={rectangleImage} alt='Logo' id='logo'/>

            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
              className="navbar-toggler"><span className="navbar-toggler-icon" 
                style={{backgroundcolor: "blueviolet"}}></span></button>

            <div id="navbarSupportedContent" className="collapse navbar-nav navbar-collapse justify-content-center ">
           
                <Link to="home" className="nav-link">HOME </Link>
                <Link to="service" className="nav-link">OUR SERVICES</Link>
                <Link to="about" className="nav-link">ABOUT US</Link>
                <Link to="career" className="nav-link">CAREER</Link>
                <Link to="contact" className="nav-link">CONTACT US</Link>
             
            </div>
            <button type="button" className="btn justify-content-end">Login</button>
          </div>
        </nav>

      </div>
      <Outlet/>
    </>



  );
}
export default Indexpage;