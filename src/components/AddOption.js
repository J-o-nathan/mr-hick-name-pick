import React from 'react';

export default class AddOption extends React.Component {
//set up the local state to be managed. Only track if an error exists. 
  state = {
    error: undefined
  };

//handleAddOption will run on the form submit. Get the value of the input from e.
//in this handleAddOption access the prop handleAddOption passed down
//call the prop handleAddOption, passing in the value of the new input option
//The prop handleAddOption will not return anything if there is no error. 
//error will be the return value of props handleAddOption being called. If no error it returns undefined.  

  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button">Add Name</button>
        </form>
      </div>
    );
  }
}
