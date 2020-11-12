import React from 'react';

const Guarantee = ({ picture, title, description }) => {
    return (
        <div className = 'block-guarantee'>
            <img src = { picture } alt = 'my pic' className = 'picture-style'/>
            <h3>{ title }</h3>
            <p className = 'description'>{ description }</p>
        </div>
    )
}
export default Guarantee;