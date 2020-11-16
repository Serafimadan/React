import React from 'react';

const Button = ({ getFriend }) => {
    // create a <button> with the text Get a friend! and onClick attribute
    return (   
        <div className = 'button-container'>
            <button onClick = { getFriend } className = 'button'>
                Get a friend!
            </button>
        </div>
    )
}

export default Button;