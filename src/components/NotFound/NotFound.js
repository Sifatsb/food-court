import React from 'react';
import error from '../../Images/error.png'
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <img className="error-msg" src={error} alt="Error" />
        </div>
    );
};

export default NotFound;