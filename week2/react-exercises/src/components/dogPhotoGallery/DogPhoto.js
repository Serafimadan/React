import React from 'react';

const DogPhoto = ({ dogUrl }) => {
    
    return (   
        <div>
            <img src = {dogUrl} alt = 'one of dogs'/>
        </div>
    )
}

export default DogPhoto;