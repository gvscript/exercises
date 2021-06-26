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
    this.setState({
      numeroCliques1: 1
    })
  
  }

  hendleClick2() {
    this.setState({
      numeroCliques2: 1
    })
  }

  hendleClick3() {
    this.setState({
      numeroCliques3: 1
    })
  }

  render() {
    console.log(this);
    return(
      <section>
        <button onClick={ this.hendleClick1 }>Botão 1</button>
        <button onClick={ this.hendleClick2 }>Botão 2</button>
        <button onClick={ this.hendleClick3 }>Botão 3</button>
      </section>
    )
  }
}

export default App;
