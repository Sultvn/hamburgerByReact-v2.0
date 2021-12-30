import React from 'react'

function Button(props) {
    return (
      <button
        className={props.cName}
        onClick={props.func}
      >
        {props.sign}
      </button>
    );
}

export default Button
