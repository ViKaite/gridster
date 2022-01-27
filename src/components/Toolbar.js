import React from 'react';
import Button from "./Button";


const Toolbar = () => {
    return (
        <div className="navBar">

                <input type="text" placeholder="row" />

            <p className="margin">x</p>

                <input type="text" placeholder="column" />
        <Button></Button>


        </div>
    );
};

export default Toolbar;