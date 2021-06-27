import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super()

    this.hendleChangeTextArea = this.hendleChangeTextArea.bind(this);

    this.state = {
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
          <select>
            <label htmlFor="">
              Sobre você:
              <textarea 
                name="sobreVoce" 
                value={ this.state.sobreVoce } 
                onChange={ this.hendleChangeTextArea }
              />
            </label>
            <input 
              type='number'
              name="idade" 
            />
            <input 
              type="checkbox" 
              name="aceite"
            />
          </select>
        </form>

      </section>
    )
  }
}

export default Form;