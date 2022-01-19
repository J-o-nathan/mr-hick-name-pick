import React from 'react';

const Option = (props) => (
  <div className="option">
    <p className="option__text">{props.count}. {props.optionText}</p>
    <button
      className="button button--link"
//onClick use the prop handleDeleteOption, passing in the optionText also from props
      onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      remove me
      </button>
  </div>
);

export default Option;
