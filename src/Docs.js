import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Docs() {

    const tools = [
        'Brush',
        'Eraser',
        'Fill Bucket',
        'Eye Dropper',
        'Rectangle',
        'Ellipse',
        'Rectangle Select',
    ]

    return (
        <div>
            <h1 className='title'>Documentation</h1>

            <div className='homeDivider'>
                <h1>Tools</h1>
                {docList(tools)}
            </div>

        </div>
    );
}

function toLinkEnd(str) { // replaces spaces with dashes
    return str.replace(/\s+/g, '-').toLowerCase();
}

function docList(list) {
    return (
        <div className='center'>
            <ul className='featureList'>
                {list.map(str =>
                    <Link className='link' to={`/docs/${toLinkEnd(str)}`}>
                        <li>{str}</li>
                    </Link>
                )}
            </ul>
        </div>
    );
}

export default Docs;