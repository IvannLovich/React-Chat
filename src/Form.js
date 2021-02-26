import React, { Component } from 'react';

class Form extends Component {
  state = {
    johnChatValue: '',
    amyChatValue: '',
    disabledButtons: -1,
  };

  handleChange = (event, userName, index) => {
    userName === 'Amy'
      ? this.setState({
          amyChatValue: event.target.value,
          disabledButtons: index,
        })
      : this.setState({
          johnChatValue: event.target.value,
          disabledButtons: index,
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
              disabled={this.state.disabledButtons !== index}
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
