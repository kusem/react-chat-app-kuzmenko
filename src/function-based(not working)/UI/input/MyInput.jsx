import React from 'react';
import classes from './MyInput.modules.css';
const MyInput = React.forwardRef((props, ref) => {
    return (
        <input className={classes.myInput} {...props}/>
    );
});

export default MyInput;