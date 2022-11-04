import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.css';
import jQuery from 'jquery'
import 'bootstrap/dist/js/bootstrap.js';
import './components/style.css';
import './components/responsive.css';
import './components/main.js';
import './components/themify-icon/themify-icons.css';

// import './components/counterup/appear.js';
// import './components/counterup/jquery.counterup.min.js';
// import './components/counterup/jquery.waypoints.min.js';

// import './components/jquery-min.js';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import AboutUs from './components/AboutUS/AboutUs';
import AccelerationProgram from './components/AccelerationProgram/AccelerationProgram';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
            <Routes>
            
                <Route index element={<> <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>  <Home /> </>} />
                <Route path='/about' element={<AboutUs/>} />
                <Route path='/acceleration-program' element={<AccelerationProgram/>} />
            </Routes>
        </BrowserRouter>
        <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
