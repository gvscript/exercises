import React, { Component } from 'react';
import './App.css';

function handleClick2() {
  console.log('Botão 2 ok');
};
function handleClick3() {
  console.log('Botão 3 ok');
};
function handleClick1() {
  console.log('Botão 1 ok');
};

class App extends Component {
  render() {
    console.log(this);
    return (
      <section>
        <button onClick={ handleClick1 }>Botão 1</button>
        <button onClick={ handleClick2 }>Botão 2</button>
        <button onClick={ handleClick3 }>Botão 3</button>
      </section>
    );

  }
}

export default App;
