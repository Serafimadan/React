import React from 'react';

const Button = ({ handleClickAsync }) => {
    // create a <button> with the text Add 1! and onClick attribute
    return (   
        <button onClick={ handleClickAsync }>
            Add 1!
        </button> 
    )
}

export default Button;