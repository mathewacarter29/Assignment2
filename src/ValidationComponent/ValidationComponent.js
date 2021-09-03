import React from 'react'

const validationComponent = (props) => {

    const textLength = props.textLength;
    let output = "Text too short";
    if (textLength >= 5) {
        output = "Text long enough";
    }
   
    return (
        <div>
         <p>{output}</p>
        </div>
    );
}

export default validationComponent;