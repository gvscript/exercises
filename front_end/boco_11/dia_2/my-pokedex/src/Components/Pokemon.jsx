import React, { Component } from 'react';

class Pokemon extends Component {
  render() {
    return (
      <section>
        <div>
          <h4>Nome</h4>
          <h5>Tipo</h5>
          <p>Peso</p>
        </div>
        <div>
          <img src="https:\/\/cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png" alt="" />
        </div>
      </section>
    )
  }
};

export default Pokemon