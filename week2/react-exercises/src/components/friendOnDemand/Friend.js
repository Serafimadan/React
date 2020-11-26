import { useState, useEffect } from 'react';
import Button from './Button';
import FriendProfile from './FriendProfile';

const Friend = () => {
    const [friend, setFriend] = useState({});
    const [error, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);

    function getFriend() {
        setLoading(true);
        fetch('https://www.randomuser.me/api?results=1')
        .then(response => response.json())
        .then(data => setFriend(data.results[0]))
        .catch((err) => {
            console.log(err)
            setError(true)
        }) 
        setLoading(false);
    }
    useEffect(()=>{
        getFriend()
    }, [])

    return ( 
        <div className = 'container'>
            {isLoading && <p>Loading ...</p>}
            <FriendProfile 
                friendProps = { 
                    {
                        friend: friend,
                        error: error
                    } 
                }
            />
            <Button getFriend = { getFriend }/>
        </div>
    )
}

export default Friend;