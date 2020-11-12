import React from 'react';
import Hobbies from './Hobbies';

const hobbiesArray = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];

const HobbyList = () => {
    const getHobbyListItems = hobbiesArray.map((hobby) =>
        // define the key inside the array
        <Hobbies key={ hobby } hobby={ hobby } />
    );
    return (
        <div> 
            <h2>First exercise!</h2>
            <ul> 
                { getHobbyListItems } 
            </ul>
        </div>
    );
}

export default HobbyList;