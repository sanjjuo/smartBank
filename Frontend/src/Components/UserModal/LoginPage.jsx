import React from 'react'
import "../UserModal/LoginPage.css"
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import UserModal from './UserModal';
import "../../Responsive.css"

const LoginPage = ({modal, setModal, url, token, setToken}) => {
    
    return (
        <section className="login-page">
            <div className="headings">
                <h1>Simple and Safe banking</h1>
                <p>Approved by milions of users worldwide</p>
                  <Link onClick={()=>setModal(true)} style={{color:"inherit", textDecoration:"none"}}><button type="button">Get Started <IoIosArrowRoundForward size={25}/></button></Link>
            </div> 
            <UserModal show={modal} onHide={() => setModal(false)} setModal={setModal} url={url} token={token} setToken={setToken} />
        </section>
    )
}

export default LoginPage
