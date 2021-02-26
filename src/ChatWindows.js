import React, { Component } from 'react';
import Form from './Form';

class ChatWindows extends Component {
  state = {
    users: [{ username: 'Amy' }, { username: 'John' }],
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ],
  };
  handleSubmit = (item, userName) => {
    this.setState((oldState) => ({
      messages: [
        ...oldState.messages,
        {
          username: userName,
          text: item,
        },
      ],
    }));
  };
  render() {
    const { users, messages } = this.state;
    return (
      <div className="container">
        {users.map((us, index) => (
          <div key={index} className="chat-window">
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
            <Form
              index={index}
              user={us}
              onAdd={(event) => this.handleSubmit(event, us.username)}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default ChatWindows;
