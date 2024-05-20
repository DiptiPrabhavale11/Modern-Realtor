import './App.css'
import AppHeader from "./components/AppHeader";
import AppFooter from './components/AppFooter';
import CARForm from './components/CARForm';
import MarketAnalysis from './components/MarketAnalysis';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Routes, Route,
} from "react-router-dom";
import { useState } from "react";
// import { Alert } from "react-bootstrap";
// import Auth from "./utility/constants/AuthConstants.js"
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
const App = () => {
  return (
    <div className="app">
      <AppHeader>
      </AppHeader>
      {/* <div className="spacing">
        {error && <Alert variant={error.variant}> {error.msg}</Alert>}
      </div> */}
      <div className='my-4'>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/form" element={<CARForm />} />
          <Route path="/market-analysis" element={<MarketAnalysis />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      <AppFooter style={{ position: 'relative' }} />
    </div>
  )
}

export default App
