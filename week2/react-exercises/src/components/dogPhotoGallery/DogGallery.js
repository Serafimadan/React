import React, { useState } from 'react';
import Button from './Button';
import DogPhoto from './DogPhoto';

const DogGallery = () => {
    const [dogPhotos, setDogPhotos] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    function getDogPhoto() {
        setLoading(true);
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => { 
            setDogPhotos([...dogPhotos, data.message]);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setError(true);
            setLoading(false);
        }) 
    }
    
    return (   
        <div>
            {isLoading && <p>Loading ...</p>}
            {dogPhotos.length === 0 ? 
                "Get your first dog by clicking the button!" : 
                !error && <div>{dogPhotos.map(dog => <DogPhoto dogUrl = {dog} key = {dog}/>)}</div>
            }
            <Button getDogPhoto = {getDogPhoto}/>
            {error && <p>So sorry! Something went wrong.</p>}  
        </div>
    )
}

export default DogGallery;