import React from 'react';
import Config from '../Config/Config';

const Device = (props) => {
    return (
        <div style={{ border: "2px solid blue", padding: "5px", margin: "5px" }}>
            <h2>My device: {props.name}, My steps: {props.steps}</h2>
            <Config price={props.price} steps={props.steps}></Config>
        </div>
    );
};

export default Device;