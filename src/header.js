import React from 'react';
import './Header.css';

const header = function (props) {
    
    return (
        <div className="header">
            {props.heading}
        </div>
    )
}

export default header;