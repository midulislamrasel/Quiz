import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navHeader'>
            <div>
                <h3>Logo</h3>
            </div>
            <div>
                <Link className='navbarStyle' to='/home'>Home</Link>
                <Link className='navbarStyle' to='/about'>About</Link>
                <Link className='navbarStyle' to='/order'>Order</Link>
                <Link className='navbarStyle' to='/quiz'>Quiz</Link>
                <Link className='navbarStyle' to='/footer'>Footer</Link>
            </div>
        </div>
    );
};

export default Navbar;