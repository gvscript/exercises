import React, { Component } from 'react';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    const { pokemons } = this.props;
    // console.log(pokemons);
    return (
      pokemons.map((pokemon) => <Pokemon key={ pokemon.id } pokemon={ pokemon } />)
    )
  }
}



export default Pokedex;
