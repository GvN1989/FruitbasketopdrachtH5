import React from "react";

function Button ({clickHandler, type,children, disabled}){
    return(
        <button
            onClick={clickHandler}
            type={type}
            disabled={disabled || false}
        >
            {children}
        </button>
    )
}


export default Button;