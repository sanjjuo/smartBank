import React from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './Components/LoginPage/LoginPage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AdminPanel from './Components/AdminPanel/AdminPanel';

const App = () => {

  const url = "http://localhost:4000"
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/adminpanel' element={<AdminPanel url={url}/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
