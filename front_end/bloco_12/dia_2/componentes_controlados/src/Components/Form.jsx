import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super()

    this.hendleChangeTextArea = this.hendleChangeTextArea.bind(this);

    this.state = {
      estado: '',
      sobreVoce: '',
      idade: 0,
      aceite: false,
    }
    console.log();
  };

  hendleChangeTextArea(e) {
    this.setState({ sobreVoce: e.target.value });
  }


  render() {
    return(
      <section>
        <h1>Formulário em React</h1>
        <form className='form'>
          <select name="estado">
            <option value="sp">São Paulo</option>
            <option value="bh">Belo Horizonte</option>
          </select>
          <input 
            type='number'
            name="idade" 
          />
          <input 
            type="checkbox" 
            name="aceite"
          />
          <label htmlFor="">
            Sobre você:
            <textarea 
              name="sobreVoce" 
              value={ this.state.sobreVoce } 
              onChange={ this.hendleChangeTextArea }
            />
          </label>
        </form>
      </section>
    )
  }
}

export default Form;