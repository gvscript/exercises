import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      numClick1: 0,
      numClick2: 0,
      numClick3: 0,
    };

    this.hendleClick1 = this.hendleClick1.bind(this);
    this.hendleClick2 = this.hendleClick2.bind(this);
    this.hendleClick3 = this.hendleClick3.bind(this);
  };

  hendleClick1() {
    this.setState((numAnterior, _props) => ({
      numClick1: numAnterior.numClick1 +1
    }));
  };

  hendleClick2() {
    this.setState((numAnterior, _props) => ({
      numClick2: numAnterior.numClick2 +1
    }));
  };

  hendleClick3() {
    this.setState((numAnterior, _props) => ({
      numClick3: numAnterior.numClick3 +1
    }));
  };

  render() {
    console.log(this);
    return(
      <section>
        <button onClick={ this.hendleClick1 }>B1 - clicou { this.state.numClick1 }</button>
        <button onClick={ this.hendleClick2 }>B2 - clicou { this.state.numClick2 }</button>
        <button onClick={ this.hendleClick3 }>B3 - clicou { this.state.numClick3 }</button>
      </section>
    )
  }
}

export default App;
