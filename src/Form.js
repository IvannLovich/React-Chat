import React, { Component } from 'react';

class Form extends Component {
  state = {
    chatValue: '',
  };

  handleChange = (event) => {
    this.setState({
      chatValue: event.target.value,
    });
  };

  addMessage = (event) => {
    const { onAdd } = this.props;
    event.preventDefault();
    onAdd(this.state.chatValue);
  };

  render() {
    const { chatValue } = this.state;
    return (
      <div>
        <form className="input-group" onSubmit={this.addMessage}>
          <input
            onChange={this.handleChange}
            defaultValue={chatValue}
            type="text"
            className="form-control"
            placeholder="Enter your message..."
          />
          <div className="input-group-append">
            <button
              className="btn submit-button"
              disabled={this.state.chatValue === ''}
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
