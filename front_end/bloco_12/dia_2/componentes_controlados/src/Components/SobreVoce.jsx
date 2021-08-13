import React, { Component } from 'react';

class SobreVoce extends Component {
  render() {
    const { value, hendleChenge } = this.props;
    return (
      <label htmlFor="">
        <p>Sobre você:</p>
        <textarea 
          name="sobreVoce"
          value={ value }
          onChange={ hendleChenge }
        />
      </label>
    )
  }
}

export default SobreVoce