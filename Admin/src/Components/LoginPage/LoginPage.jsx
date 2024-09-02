import React from 'react'
import "../LoginPage/LoginPage.css"
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <section className="loginpage-section">
      <div className="top-nav">
        <ul>
          <li>smartbank</li>
          <li><button type="button">Log in</button></li>
        </ul>
      </div>
      <div className="headings">
        <h1>Simple and Safe banking</h1>
        <p>Approved by milions of users worldwide</p>
        <Link to="/adminpanel"><button type="button">Get started</button></Link>
      </div>
    </section>
  )
}

export default LoginPage
