import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.hendleClick1 = this.hendleClick1.bind(this);
    this.hendleClick2 = this.hendleClick2.bind(this);
    this.hendleClick3 = this.hendleClick3.bind(this);
  }

  hendleClick1() {
    console.log(this);
    console.log('Botão 1 ok');
  }

  hendleClick2() {
    console.log(this);
    console.log('Botão 2 ok');
  }

  hendleClick3() {
    console.log(this);
    console.log('Botão 3 ok')
  }

  render() {
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
