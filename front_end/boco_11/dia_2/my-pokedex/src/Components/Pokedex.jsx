import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default Pokedex;
