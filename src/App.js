import './App.css';
import React, { Component } from 'react'
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {

  state = {
    text: "",
  };

  textChangeListener = (event) => {
    this.setState({ text: event.target.value });
  }

  removeCharHandler = (index) => {
    const usertext = this.state.text.split("");
    usertext.splice(index, 1);

    //Method to join an array into a string
    const updated = usertext.join("");
    this.setState({text: updated});
  }

  render() {
    const chars = this.state.text.split("").map((char, index) => {
      return (<CharComponent key={index}
        click={() => this.removeCharHandler(index)}
        char={char}
      ></CharComponent>);
    })
    console.log(this.state.charArray)

    return (
      <div className="App">
        <input onChange={this.textChangeListener} value={this.state.text}></input>
        <p>{this.state.text.length}</p>
        <ValidationComponent textLength={this.state.text.length}></ValidationComponent>
        {chars}
      </div>
    );
    
  }
}

export default App;
