import React, { useState } from 'react'
import "../LoginPage/LoginPage.css"
import { Link } from 'react-router-dom'
import AdminModal from '../AdminModal/AdminModal'
import { IoIosArrowRoundForward } from "react-icons/io";

const LoginPage = ({token, setToken, url}) => {
  const [login, setlogin] = useState(false)
  return (
    <>
    <section className="loginpage-section">
      <div className="top-nav">
        <ul>
          <li>smartbank</li>
          <li onClick={()=>setlogin(true)}><button type="button">Log in</button></li>
        </ul>
      </div>
      <div className="headings">
        <h1>Simple and Safe banking</h1>
        <p>Approved by milions of users worldwide</p>
        <Link to="/adminpanel"><button type="button">Get started <IoIosArrowRoundForward size={25}/></button></Link>
      </div>
    </section>
    <AdminModal show={login} setlogin={setlogin} onHide={()=>setlogin(false)} url={url} token={token} setToken={setToken}/>
    </>
  )
}

export default LoginPage
