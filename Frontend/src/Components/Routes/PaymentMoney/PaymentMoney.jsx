import React, { useState } from 'react'
import "../PaymentMoney/PaymentMoney.css"
import { PiHandDepositLight } from "react-icons/pi";
import { PiHandWithdraw } from "react-icons/pi";
import { AiTwotoneBank } from "react-icons/ai";
import { LiaHistorySolid } from "react-icons/lia";
import { IoSettings } from "react-icons/io5";
import { SlLogout } from "react-icons/sl";
import { Link, Outlet } from 'react-router-dom';

const PaymentMoney = () => {

    const [link, setLink] = useState("deposit")

    return (
        <section className="paymentmoney-section">
            <div className="sidebar">
                <div className="user-details">
                    <div className="user-image">
                        <img src="/user.jpg" alt="" />
                    </div>
                    <h5>Megan fox</h5>
                </div>

                <div className="payment-links">
                    <ul>
                        <Link to="/payment" style={{ color: "inherit", textDecoration: "none" }} onClick={() => setLink("deposit")}
                            className={link === "deposit" ? "active" : ""}>
                            <li><PiHandDepositLight className='icon' />Deposit</li></Link>

                        <Link to="withdraw" style={{ color: "inherit", textDecoration: "none" }} onClick={() => setLink("withdraw")}
                            className={link === "withdraw" ? "active" : ""}>
                            <li><PiHandWithdraw className='icon' />WithDraw</li>
                        </Link>

                        <Link to="balance" style={{ color: "inherit", textDecoration: "none" }} onClick={() => setLink("balance")}
                            className={link === "balance" ? "active" : ""}>
                            <li><AiTwotoneBank className='icon' />Balance</li></Link>
                        <li><LiaHistorySolid className='icon' />Transaction</li>
                    </ul>
                </div>
            </div>

            <div className="main-section">
                <Outlet />
            </div>
        </section>
    )
}

export default PaymentMoney
