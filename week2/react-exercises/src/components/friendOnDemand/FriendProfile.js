import React from 'react';

const FriendProfile = ({ friendProps }) => {
    // destructure 
    const { friend, error } = friendProps;
    return (  
        <div >
            {/* if we don't have an error we will see an inform about friend */}
            {!error && friend.name && (
                <ul className = 'friendInfo'>
                    <li>First name:{friend.name.first}</li>
                    <li>Last name:{friend.name.last}</li>
                    <li>Address: {friend.location.city}</li>
                    <li>Country: {friend.location.country}</li>
                    <li>Email address: {friend.email}</li>
                    <li>Phone number: {friend.phone}</li>
                </ul> 
            )}
        </div> 
    )
}

export default FriendProfile;