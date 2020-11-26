import React from 'react';

const FriendProfile = ({ friendProps }) => {
    // destructure 
    const { friend, error } = friendProps;
    const { name, location, email, phone } = friend
    return (  
        <div >
            {/* if we don't have an error we will see an inform about friend */}
            {!error && name && (
                <ul className = 'friendInfo'>
                    <li>First name:{name.first}</li>
                    <li>Last name:{name.last}</li>
                    <li>Address: {location.city}</li>
                    <li>Country: {location.country}</li>
                    <li>Email address: {email}</li>
                    <li>Phone number: {phone}</li>
                </ul> 
            )}
        </div> 
    )
}

export default FriendProfile;