import React from 'react'
import '../Payement/Payement.css'
import { MdOutlineTouchApp } from "react-icons/md";
import { HiOutlineCash } from "react-icons/hi";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Payment = () => {
    return (
        <section className="payment-section">
            <div className="full-container">
                <div className="easy-payment">
                    <div className="contents">
                        <div className="headings-btn">
                            <h2>Easy payments with one tap</h2>
                            <p>Send and request money easily with anyone. No extra fees.</p>
                            <Link to="/payment"><button type="button">Start payment</button></Link>
                        </div>
                        <div className="touch-icon">
                            <MdOutlineTouchApp className='icon' />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="cashback">
                            <div className="headings">
                                <h2>Get cash back and reward for every payment you do!</h2>
                                <p>Hundreds of deals and reward are waiting for you.</p>
                            </div>
                            <div className="cashback-icon">
                                <HiOutlineCash className='icon' />
                                <p>+ 10 points cashback!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="abroad-payment">
                            <div className="headings">
                                <h2>Send and recieve payments from abroad</h2>
                                <p>Supporting 100+ countries. No hidden fees, unlimited.</p>
                            </div>
                            <div className="global-icon">
                                <BsGlobeCentralSouthAsia className='icon' />
                                <p>Worldwide support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Payment
