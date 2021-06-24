import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { pokemon } = this.props;
    return (
      <section className="pokemon-card-container">
        <div>
          <h4>Nome: { pokemon.name }</h4>
          <h5>Tipo: { pokemon.type }</h5>
          <p>Peso: { pokemon.averageWeight.value } { pokemon.averageWeight.measurementUnit }</p>
        </div>
        <div className="pokemon-image-container">
          <img  src={ pokemon.image } alt={ pokemon.name } />
        </div>
      </section>
    )
  }
};

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }).isRequired
  }).isRequired
};

export default Pokemon