import React from 'react';

const DogPhoto = ({ dogUrl }) => {
    
    return (   
        <div>
            <img src = {dogUrl} alt = 'dog'/>
        </div>
    )
}

export default DogPhoto;