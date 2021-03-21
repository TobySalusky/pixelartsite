import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Home() {

    return (
        <div>
            <h1 className='title'>Pixel Art Editor</h1>

            <div className='homeDivider'>
                <h2>Crisp UI</h2>
                <img className='programImage' src='/images/program.png' alt="Program"/>
            </div>

            <div className='homeDivider'>
                <h2>Stunning Pixel Art Made Easy</h2>
                <img className='longinusImage' src='/images/longinus.jpg' alt="Glorious Longinus"/>
            </div>

            <div className='homeDivider'>
                <div className ='homeBottom'>
                    <Link to='/downloads'>
                        <button className='downloadsButton'>Downloads</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;