import React from 'react';
import './App.css';

function Updates() {

    const priorityList = [
        'Importing',
        'Custom File Format',
        'Flipping Selections',
        'Mirror Axes',
    ]

    const plannedList = [
        'Mutable UI',
        'Scriptable Brushes',
        'Filtering Layers',
        'Palettes',
        'Palette Swapping',
        'Programmatic Editing',
    ]

    const v1Features = [
        'Basic Canvas',
        'Layers',
        'Exporting as PNG',
        'Canvas Creation',
        'Panning/Scrolling',
        'Pixel Grid',
        'Tile Grid',
        'Brush Tool',
        'Eraser Tool',
        'Fill Bucket Tool',
        'Eye Dropper Tool',
        'Rectangle Tool',
        'Ellipse Tool',
        'Rectangle Select Tool',
    ]

    return (
        <div>
            <h1 className='title'>Upcoming Features</h1>

            <div className='homeDivider'>
                <h2>High Priority</h2>
                {centerList(priorityList)}
            </div>

            <div className='homeDivider'>
                <h2>Planned Features</h2>
                {centerList(plannedList)}
            </div>

            <div className='homeDivider'>
                <h1 className='title'>Changelogs</h1>
            </div>

            <div className='homeDivider'>
                <h2>Version 1.0</h2>
                <h3>Additions:</h3>
                {centerList(v1Features)}
            </div>
        </div>
    );
}

function centerList(list) {
    return (
        <div className='center'>
            <ul className='featureList'>
                {list.map(name =>
                    <li>{name}</li>
                )}
            </ul>
        </div>
    );
}

export default Updates;