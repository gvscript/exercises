import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      numeroCliques1: 0,
      numeroCliques2: 0,
      numeroCliques3: 0,
    }

    this.hendleClick1 = this.hendleClick1.bind(this);
    this.hendleClick2 = this.hendleClick2.bind(this);
    this.hendleClick3 = this.hendleClick3.bind(this);
  }

  hendleClick1() {
    this.setState((numAnterior, _props) => ({
      numeroCliques1: numAnterior.numeroCliques1 + 1
    }));
  
  }

  hendleClick2() {
    this.setState((numAnterior, _props) => ({
      numeroCliques2: numAnterior.numeroCliques2 + 1
    }))
  }

  hendleClick3() {
    this.setState((numAnterior, _props) => ({
      numeroCliques3: numAnterior.numeroCliques3 + 1
    }))
  }

  render() {
    console.log(this);
    return(
      <section>
        <button onClick={ this.hendleClick1 }>B1 - clicou { this.state.numeroCliques1 }</button>
        <button onClick={ this.hendleClick2 }>B2 - clicou { this.state.numeroCliques2 }</button>
        <button onClick={ this.hendleClick3 }>B3 - clicou { this.state.numeroCliques3 }</button>
      </section>
    )
  }
}

export default App;
