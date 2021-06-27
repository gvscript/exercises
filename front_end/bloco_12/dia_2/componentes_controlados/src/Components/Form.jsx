import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super()

    console.log();
  };



  render() {
    return(
      <section>
        <h1>Formulário em React</h1>
        <form>
          <label htmlFor="">
            <textarea name="" />
          </label>
          <input 
            type="number" 
            name="" 
          />
          <input 
            type="checkbox" 
            name=""
          />
        </form>
      </section>
    )
  }
}

export default Form;