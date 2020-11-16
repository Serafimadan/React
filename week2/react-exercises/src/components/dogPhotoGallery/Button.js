import React from 'react';

const Button = ({ getDogPhoto }) => {
    // create a <button>  and onClick attribute
    return (  
        <div className = 'button-container'> 
            <button onClick = { getDogPhoto } className = 'button'>
                Get a dog!
            </button> 
        </div>
    )
}

export default Button;