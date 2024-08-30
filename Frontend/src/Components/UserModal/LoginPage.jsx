import React from 'react'
import "../UserModal/LoginPage.css"
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const LoginPage = () => {
    
    return (
        <section className="login-page">
            <div className="headings">
                <h1>Simple and Safe banking</h1>
                <p>Approved by milions of users worldwide</p>
                  <Link to="/home" style={{color:"inherit", textDecoration:"none"}}><button type="button">Get Started <IoIosArrowRoundForward size={25}/></button></Link>
            </div> 
        </section>
    )
}

export default LoginPage
