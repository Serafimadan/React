import React from 'react';
import Hobbies from './Hobbies';

const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];

const HobbyList = () => {
    const listItems = hobbies.map((hobby) =>
    // define the key inside the array
    <Hobbies key={hobby} hobby={hobby} />
    );
    return (
        <div> 
        <h2>First exercise!</h2>
        <ul> 
            {listItems}
        </ul>
        </div>
    );
}

export default HobbyList;