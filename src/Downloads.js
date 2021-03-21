import React from 'react';
import './App.css';

function Downloads() {
    return (
        <div>
            <h1 className='title'>Downloads</h1>
            <h1>Latest Version: 1.0</h1>
            <a className='downloadLink' href="/files/v1.0_Windows_Installer.exe" download="v1.0_PixelArt_Windows_Installer.exe">Version 1.0 Windows x64 Installer</a>
        </div>
    );
}

export default Downloads;