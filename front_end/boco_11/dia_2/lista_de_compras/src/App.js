import React, { Component } from 'react'
import './App.css';
import ShoppingList from './Components/ShoppingList';

class App extends Component {
  render() {
    return (
      <section>
        <h1>Lista de Compras</h1>
        <ul>
          <ShoppingList />
        </ul>
      </section>
    )
  }
}

export default App;
