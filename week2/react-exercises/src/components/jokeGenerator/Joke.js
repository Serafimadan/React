import React from 'react';

const Joke = ({ joke }) => {
    
    return (   
        <div>
            <p className = 'setup'>{joke.setup}</p>
            <p className = 'setup'>{joke.punchline}</p>
        </div>
    )
}

export default Joke;