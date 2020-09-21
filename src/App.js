import React from 'react';

import "./styles.css";
import Button from './Button';

function Display() {
    return ( 
        <div>
            <h1> Hello World! </h1> 
            <Button title="App Store"></Button>
            <Button title="Play Store"></Button>
        </div>
    );
} 

export default Display;

// Here Display is the Name of function we are exporting.