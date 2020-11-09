import React, { useState } from 'react';
import Count from './Count';

const Counter = () => {
        // Declare a new state variable, which we'll call "count"
        const [count, setCount] = useState(0);
        const feedback = count >10 ? "It's higher than 10!" : "Keep counting...";
        
        return (
            <div className = 'container'>
                <h2>Exercise three!</h2>
                <div className = 'counter-container'>
                    <p>You clicked <i>{count}</i> times</p>
                        {feedback}
                        <Count count = {count} setCount = {setCount}/>
                </div>
            </div>
        );
}

export default Counter;