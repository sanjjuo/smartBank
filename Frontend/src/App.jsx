import React, { useEffect, useState } from 'react'
import "./App.css"
import Pages from './Pages/Pages'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MyNavbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import PaymentMoney from './Components/Routes/PaymentMoney/PaymentMoney'
import Deposit from './Components/Routes/Deposit/Deposit'
import Withdraw from './Components/Routes/WithDraw/WithDraw'
import Balance from './Components/Routes/Balance/Balance'
import LoginPage from './Components/UserModal/LoginPage'
import ScrollToTop from './ScrollToTop'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Transaction from './Components/Routes/Transaction/Transaction'

const App = () => {
  const url = "http://localhost:4000"
  const [token, setToken] = useState("");
  const [modal, setModal] = useState(false)


  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"))
    }
  }, [])

  return (
    <div className='app'>
      <Router>
        <ToastContainer/>
        <ScrollToTop />
        <MyNavbar url={url} token={token} setToken={setToken} modal={modal} setModal={setModal}/>
        <Routes>
          <Route path='/' element={<LoginPage modal={modal} setModal={setModal} url={url} token={token} setToken={setToken}/>} />
          <Route path='/home' element={<Pages />} />
          <Route path='/payment' element={<PaymentMoney />}>
            <Route path='/payment' element={<Deposit url={url} />} />
            <Route path='withdraw' element={<Withdraw url={url}/>} />
            <Route path='balance' element={<Balance url={url}/>} />
            <Route path='transaction' element={<Transaction url={url}/>}/>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
