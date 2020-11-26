import React from 'react';

const Error = ({ isError }) => {
  if (isError === 404) {
    return (
      <div className="error">
        <p>Please enter a valid city!</p>
      </div>
    );
  } else if (isError === 401) {
    return (
      <div className="error">
        <p>So sorry! Something Went Wrong</p>
      </div>
    );
  } else {
    return <div>{null}</div>;
  }
};
export default Error;