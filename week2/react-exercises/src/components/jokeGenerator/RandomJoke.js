import React, { useState, useEffect } from 'react';
import Joke from './Joke';


const RandomJoke = () => {
    const [joke, setJoke] = useState({});
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    // make use of the useEffect hook to make an asynchronous API call to the API endpoint
    useEffect(() => {
        async function fecthRandomJoke() { 
            try {
                await  setLoading(true);
                const response = await fetch('https://official-joke-api.appspot.com/random_joke');
                const data = await response.json();
                // put the end result into the state variable using setJoke
                setJoke(data);
                setLoading(false);
            } 
            catch (err) {
                console.log(err);
                setError(true);
                setLoading(false);
            }
        }
        fecthRandomJoke();
    }, [])
    
    return (   
        <div className = 'container'>
            {isLoading && <p>Loading ...</p>}
            {!error && <Joke joke = {joke}/>}
            {error && <p>So sorry! Something went wrong.</p>}  
        </div>
    )
}

export default RandomJoke;