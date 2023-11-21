import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './components/Home.jsx'
import './css/index.css'
import Home from './components/Home.jsx'
import './components/Header.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Header/>
    <Home/>
    <Footer/>
  </React.StrictMode>
)
