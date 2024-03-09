import React from "react";

function Button ({clickHandler, type,children, disabled}){
    return(
        <button
            onClick={clickHandler}
            type={type}
            disabled={disable || false}
        >
            {children}
        </button>
    )
}


export default Button;