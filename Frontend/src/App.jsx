import React from 'react'
import "./App.css"
import Pages from './Pages/Pages'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MyNavbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import PaymentMoney from './Components/Routes/PaymentMoney/PaymentMoney'
import Deposit from './Components/Routes/Deposit/Deposit'
import Withdraw from './Components/Routes/WithDraw/WithDraw'
import Balance from './Components/Routes/Balance/Balance'

const App = () => {
  return (
    <div className='app'>
      <Router>
        <MyNavbar />
        <Routes>
          <Route path='/' element={<Pages />} />
          <Route path='/payment' element={<PaymentMoney />}>
            <Route path='deposit' element={<Deposit />} />
            <Route path='withdraw' element={<Withdraw/>}/>
            <Route path='balance' element={<Balance/>}/>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
