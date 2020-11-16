import React from 'react';

const Button = ({ getFriend }) => {
    // create a <button> with the text Get a friend! and onClick attribute
    return (   
        <button onClick = { getFriend } className = 'friendButton'>
            Get a friend!
        </button> 
    )
}

export default Button;