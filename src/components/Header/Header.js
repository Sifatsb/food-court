import React from 'react';
import './Header.css'
import logo from '../../Images/logo1.png'
import { IoFastFoodOutline } from 'react-icons/io5';

const Header = () => {
    return (
        <div className="contain-nav">
            <nav className="nav-bar">
                <div>
                    {/* <a href=""><img className="logo" src={logo} alt="" /></a> */}
                    <a href=""><IoFastFoodOutline size='50px' color='black'/></a>
                </div>

                <ul className="nav-list">
                <li><a href="#">Home</a></li>
                <li><a href="#">Offer</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            
        </div>
    );
};

export default Header;