import React from 'react';

const Button = (props) => {
    // create a <button> with the text Add 1! and onClick attribute
    return (   
        <button onClick={props.handleClickAsync}>
            Add 1!
        </button> 
    )
}

export default Button;