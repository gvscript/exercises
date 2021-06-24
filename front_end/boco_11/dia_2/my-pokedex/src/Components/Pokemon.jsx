import React, { Component } from 'react';

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

export default Pokemon