import React from 'react';

const Button = ({ getDogPhoto }) => {
    // create a <button>  and onClick attribute
    return (   
        <button onClick = { getDogPhoto } className = 'dogButton'>
            Get a dog!
        </button> 
    )
}

export default Button;