import React, { Component } from 'react';

class SobreMim extends Component {
  reader() {
    const header= (
      <header className='flex-container'>
        <div>
          <h1>Gabriel Viana</h1>
          <p>Apaixonado por histórias de pessoas reais</p>
        </div>
      </header>
    )
    return header
  }
}

export default SobreMim;