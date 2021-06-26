import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super()
      this.handleClick1 = this.handleClick1.bind(this);
      this.handleClick2 = this.handleClick2.bind(this);
      this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick2() {
    console.log(this)
    console.log('Botão 2 ok');
  };
  handleClick3() {
    console.log(this)
    console.log('Botão 3 ok');
  };
  handleClick1() {
    console.log(this)
    console.log('Botão 1 ok');
  };

  render() {
    // console.log(this);
    return (
      <section>
        <button onClick={ this.handleClick1 }>Botão 1</button>
        <button onClick={ this.handleClick2 }>Botão 2</button>
        <button onClick={ this.handleClick3 }>Botão 3</button>
      </section>
    );

  }
}

export default App;
