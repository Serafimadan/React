import React from 'react';
import Button from './Button';

const Count = (props) => {
    // create function for counting 
    const handleClickAsync = () => {
        props.setCount(props.count + 1)
    }
    return (
        <div>
            <Button handleClickAsync = {handleClickAsync}/>
        </div>
    )
}

export default Count;