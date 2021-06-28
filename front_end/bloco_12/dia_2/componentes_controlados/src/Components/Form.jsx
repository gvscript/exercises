import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor() {
    super()

    this.hendleChenge = this.hendleChenge.bind(this);

    this.state = {
      nome: '',
      email: '',
      idade: 0,
      hub: '',
      sobreVoce: '',
      confirma: false,
    };
  }

  hendleChenge(e) {
    const { name } = e.target
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({ [name]: value })
  }

  render() {
    return(
      <section>
        <h1>Formulário em React</h1>
        <form className='form'>
          <input 
            placeholder='Informe seu nome'
            type="text" 
            name="nome"
            value={ this.state.nome }
            onChange={ this.hendleChenge }
          />
          <input
            placeholder='Informe seu email'
            type="email" 
            name="email"
            value={ this.state.email }
            onChange={ this.hendleChenge }
          />
          <input 
            placeholder='Informe sua idade'
            type="number" 
            name="idade"
            value={ this.state.idade }
            onChange={ this.hendleChenge }
          />
          <p>Qual seu Hub?</p>
          <select name="hub" value={ this.state.hub } onChange={ this.hendleChenge }>
            <option value="sp">São Paulo</option>
            <option value="bh">Belo Horizonte</option>
          </select>
          <label htmlFor="">
            <p>Sobre você:</p>
            <textarea 
              name="sobreVoce"
              value={ this.state.sobreVoce }
              onChange={ this.hendleChenge }
            />
          </label>
          <label htmlFor="">
            Confirma todos os dados?
            <input 
              type="checkbox" 
              name="confirma"
              value={ this.state.confirma }
              onChange={ this.hendleChenge }
            />
          </label>
        </form>
      </section>
    )
  }

}

export default Form;