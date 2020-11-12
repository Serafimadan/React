import React from 'react';
import Button from './Button';

const Count = ({ setCount, count }) => {
    // create function for counting 
    const handleClickAsync = () => {
       return setCount(count + 1);
    }
    return (
        <div>
            <Button handleClickAsync = { handleClickAsync }/>
        </div>
    )
}

export default Count;