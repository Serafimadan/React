import React, { useState, useEffect } from 'react';
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
            setDogPhotos(data.message);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setError(true);
            setLoading(false);
        }) 
    }
    useEffect(() => {
        getDogPhoto();
    }, [])
    
    return (   
        <div className = 'container'>
            {isLoading && <p>Loading ...</p>}
            {!error && <DogPhoto dogUrl = {dogPhotos}/>}
            <Button getDogPhoto = {getDogPhoto}/>
            {error && <p>So sorry! Something went wrong.</p>}  
        </div>
    )
}

export default DogGallery;