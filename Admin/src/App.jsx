import React, { useState } from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from './Components/LoginPage/LoginPage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AdminPanel from './Components/AdminPanel/AdminPanel';

const App = () => {

  const url = "http://localhost:4000"
  const [token, setToken] = useState("");

  return (
    <div>
      <Router>
        <ToastContainer/>
        <Routes>
          <Route path='/' element={<LoginPage url={url} token={token} setToken={setToken}/>} />
          <Route path='/adminpanel' element={<AdminPanel url={url}/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
