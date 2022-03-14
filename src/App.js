import React, { Component } from 'react';
import ChatWindows from './ChatWindows';
import './App.css';

class App extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <ChatWindows />
      </div>
    );
  }
}

export default App;
