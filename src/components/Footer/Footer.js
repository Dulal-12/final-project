import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <div className='container mb-5'>
            <footer>
                <div class="footer-container">
                    <div class="footer-logo">
                        <img src={logo} alt="Logo"/>
                            <h1>Pase</h1>
                    </div>
                    <ul class="footer-menu">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/policy">Privacy Policy</Link></li>
                    </ul>
                </div>
                <p class="footer-text">Copyright © 2023 Pase</p>
            </footer>


          
        </div>


    );
};

export default Footer;