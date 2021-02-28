import React, { Component } from 'react';

class Form extends Component {
  state = {
    johnChatValue: '',
    amyChatValue: '',
  };

  handleChange = (event, userName) => {
    userName === 'Amy'
      ? this.setState({
          amyChatValue: event.target.value,
        })
      : this.setState({
          johnChatValue: event.target.value,
        });
  };

  addMessage = (event) => {
    event.preventDefault();
    this.props.onAdd(
      this.props.user.username === 'Amy'
        ? this.state.amyChatValue
        : this.state.johnChatValue,
    );
  };

  disabledButton = (userName) => {
    if (userName === 'Amy') {
      if (this.state.amyChatValue === '') {
        return true;
      }
    } else {
      if (this.state.johnChatValue === '') {
        return true;
      }
    }
  };

  render() {
    const { amyChatValue, johnChatValue } = this.state;
    const { index, user } = this.props;
    return (
      <div>
        <form className="input-group" onSubmit={this.addMessage}>
          <input
            onChange={(event) => this.handleChange(event, user.username, index)}
            defaultValue={user.name === 'Amy' ? amyChatValue : johnChatValue}
            type="text"
            className="form-control"
            placeholder="Enter your message..."
          />
          <div className="input-group-append">
            <button
              className="btn submit-button"
              disabled={this.disabledButton(user.username)}
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
