import React, { Component } from 'react';
import Header from './Components/Header';
import Pokedex from './Components/Pokedex';
import pokemons from './data';
import './App.css';

class App extends Component {
  render() {
    return (
      <section className='app-container'>
        <Header />
        <Pokedex pokemons={ pokemons }/>
      </section>
    )
  }
}

export default App;
