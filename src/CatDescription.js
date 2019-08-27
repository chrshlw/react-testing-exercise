import React from 'react';

function CatDescription(props) {
    return (
    <React.Fragment>
        <div>{props.description}</div>
        <br/>
        <div>
            <img src="https://img.icons8.com/wired/64/000000/cat.png" alt="caticon" height="24px" width="24px"/> {props.clicks}
        </div>
    </React.Fragment>
    )
} 

export default CatDescription;