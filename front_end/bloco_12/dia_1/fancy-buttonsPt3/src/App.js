import React, { Component } from 'react';
import Button from './Components/Button';
import './App.css';

class App extends Component {
  render() {
    const butons = ['Botão 1', 'Botão 2', 'Botão 3'];
    return(
      butons.map((btn) => <Button key={ btn } btn={ btn } />)
    )
  }
}

export default App;
