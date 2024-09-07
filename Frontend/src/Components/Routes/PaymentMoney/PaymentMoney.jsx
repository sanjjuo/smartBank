import React, { useState } from 'react'
import "../PaymentMoney/PaymentMoney.css"
import "../../../Responsive.css"
import { PiHandDepositLight } from "react-icons/pi";
import { PiHandWithdraw } from "react-icons/pi";
import { AiTwotoneBank } from "react-icons/ai";
import { LiaHistorySolid } from "react-icons/lia";
import { MdArrowBack } from "react-icons/md";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { ImArrowLeft2 } from "react-icons/im";

const PaymentMoney = () => {

    const [link, setLink] = useState("deposit")
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate("/home")
    }

    return (
        <>
            <section className="paymentmoney-section">
                <div className="sidebar">
                    <h5><MdArrowBack onClick={handleNavigate} />Go to home</h5>
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
                            <Link to="transaction" style={{ color: "inherit", textDecoration: "none" }} onClick={() => setLink("transaction")}
                                className={link === "transaction" ? "active" : ""}>
                                <li><LiaHistorySolid className='icon' />Transaction</li></Link>
                        </ul>
                    </div>
                </div>

                <div className="main-section">
                    <Outlet />
                </div>
            </section>

            <section className="mobile-section">
                <Navbar className='paymentMoney-navbar'>
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto navbar-nav1">
                                <Nav.Link onClick={handleNavigate}><ImArrowLeft2 /></Nav.Link>

                            </Nav>
                            <Nav className="ms-auto">
                                <Nav.Link as={Link} to="/payment" className={link === "deposit" ? "active" : ""} onClick={()=>setLink("deposit")}>Deposit</Nav.Link>
                                <Nav.Link as={Link} to="withdraw" className={link === "withdraw" ? "active" : ""} onClick={()=>setLink("withdraw")}>WithDraw</Nav.Link>
                                <Nav.Link as={Link} to="balance" className={link === "balance" ? "active" : ""} onClick={()=>setLink("balance")}>Balance</Nav.Link>
                                <Nav.Link as={Link} to="transaction" className={link === "transaction" ? "active" : ""} onClick={()=>setLink("transaction")}>Transaction</Nav.Link>
                                <Nav.Link><img src='user.jpg' /></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className="main-section">
                    <Outlet />
                </div>
            </section>
        </>
    )
}

export default PaymentMoney
