import React from 'react';

const Guarantee = (props) => {
return (
    <div className = 'block-guarantee'>
        <img src = {props.picture} alt = 'my pic' className = 'picture-style'/>
        <h3>{props.title}</h3>
        <p className = 'description'>{props.description}</p>
    </div>
)
}
export default Guarantee;