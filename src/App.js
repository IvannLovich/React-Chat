import React, { Component } from 'react';
import './App.css';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

class App extends Component {
  state = {
    chatValue: '',
    users: [{ username: 'Amy' }, { username: 'John' }],
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ],
  };
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event, userName) => {
    event.preventDefault();
    this.setState((oldState) => ({
      messages: [
        ...oldState.messages,
        { username: userName, text: this.state.chatValue },
      ],
    }));
  };

  // isDisabled = (userName) => {
  //   const inputVal = this.state.chatValue;
  //   const chatUsers = this.state.users;
  //   for (const user of chatUsers) {
  //     if (userName === user.username) {
  //       if (inputVal === '') {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     }
  //   }
  // };

  render() {
    const { chatValue, users, messages } = this.state;
    console.log(chatValue);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {users.map((us) => (
            <div className="chat-window">
              <h2>Super Awesome Chat</h2>
              <div className="name sender">{us.username}</div>

              <ul className="message-list">
                {messages.map((message, index) => (
                  <li
                    key={index}
                    className={
                      message.username === us.username
                        ? 'message sender'
                        : 'message recipient'
                    }
                  >
                    <p>{`${message.username}: ${message.text}`}</p>
                  </li>
                ))}
              </ul>

              <div>
                <form
                  className="input-group"
                  onSubmit={() => this.handleSubmit(us.username)}
                >
                  <input
                    onChange={this.handleChange}
                    name={us.username}
                    defaultValue={chatValue}
                    type="text"
                    className="form-control"
                    placeholder="Enter your message..."
                  />
                  <div className="input-group-append">
                    <button className="btn submit-button">SEND</button>
                  </div>
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
