import React, { Component } from 'react';
import MessageForm from './components/MessageForm';
import MessageList from "./components/MessageList";
import Buttons from './components/buttons';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
    }
  } 

  handleNewMessage = (text) => {
    this.setState({
      messages: [...this.state.messages, { me: true, author: "Me", body: text }],
    })
  }

  render() {
    return (
      <div className="App">
        <Buttons />
        <MessageList messages={this.state.messages} />
        <MessageForm onMessageSend={this.handleNewMessage} />
      </div>
    );
  }
}


export default App;
