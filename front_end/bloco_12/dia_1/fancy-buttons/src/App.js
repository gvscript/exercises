import React, { Component } from 'react';
import './App.css';

function handleClick1() {
  console.log('Botão 1 ok');
};
function handleClick2() {
  console.log('Botão 2 ok');
};
function handleClick3() {
  console.log('Botão 3 ok');
};

class App extends Component {
  render() {
    return (
      <section>
        <button>Botão 1</button>
        <button>Botão 2</button>
        <button>Botão 3</button>
      </section>
    );

  }
}

export default App;
