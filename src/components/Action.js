import React from 'react';

const Action = (props) => (
  <div>
    <button
      className="big-button"
//onClick runs the handlPick function passed down as a prop.
//hasOptions is a prop passed down telling the length of the options array. Disable the button if array length is zero.
      onClick={props.handlePick}
      disabled={!props.hasOptions}
    >
      Are you feeling lucky?
      </button>
  </div>
);

export default Action;
