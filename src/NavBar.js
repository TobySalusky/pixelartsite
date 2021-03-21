import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function NavBar() {

    const logoStyle = {
        width: 72,
    }

    return (
        <nav>
            <img className='pixelImage' src="/images/outlined_longinus_icon.png" alt="Longinus Logo" style={logoStyle}/>
            <ul className='nav-links'>
                <Link className='link' to='/'>
                    <li>Home</li>
                </Link>
                <Link className='link' to='/updates'>
                    <li>Updates</li>
                </Link>
                <Link className='link' to='/docs'>
                    <li>Docs</li>
                </Link>
                <Link className='link' to='/downloads'>
                    <li>Downloads</li>
                </Link>
            </ul>
        </nav>
    );
}

export default NavBar;
