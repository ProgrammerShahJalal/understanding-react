import React from 'react';
import Config from '../Config/Config';

const Device = (props) => {
    return (
        <div>
            <h2>My device: {props.name}</h2>
            <Config price={props.price}></Config>
        </div>
    );
};

export default Device;