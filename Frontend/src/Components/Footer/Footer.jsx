import React from 'react'
import "../Footer/Footer.css"
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "../../Responsive.css"

const Footer = () => {
    return (
        <section className='footer-section'>
            <div className="first-part">
                <input type="email" name="email" id="email" placeholder='Insert your email here' />
                <button type="button">Subscribe</button>
            </div>
            <div className="middle-part">
                <div className="row">
                    <div className="col-md-3">
                        <div className="footer-contents">
                            <h1>smartbank</h1>
                            <ul>
                                <li><FaInstagram /></li>
                                <li><FaTwitter /></li>
                                <li><FaLinkedin /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-contents2">
                            <h4>Help</h4>
                            <ul>
                                <li>FAQ</li>
                                <li>Customer Service</li>
                                <li>How to guides</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-contents2">
                            <h4>Other</h4>
                            <ul>
                                <li>Privacy Policy</li>
                                <li>Sitemap</li>
                                <li>Subscriptions</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-contents2">
                            <h4>Contact us</h4>
                            <ul>
                                <li>sanjeedofficial22@gmail.com</li>
                                <li>+91 7902501645</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="last-part">
                <p>&copy; All right received @smartbank, {new Date().getFullYear()}</p>
            </div>
        </section>
    )
}

export default Footer
