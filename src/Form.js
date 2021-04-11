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
    const { amyChatValue, johnChatValue } = this.state;
    const { user } = this.props;
    return (
      <div>
        <form className="input-group" onSubmit={this.addMessage}>
          <input
            onChange={(event) => this.handleChange(event)}
            defaultValue={user.name === 'Amy' ? amyChatValue : johnChatValue}
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
