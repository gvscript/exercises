import React, { Component } from 'react';

class Button extends Component {
  constructor() {
    super()

    this.state = {
      numClick: 0,
      background: 'white',
    };

    this.hendleClick = this.hendleClick.bind(this);
    this.hendleChangeColor = this.hendleChangeColor.bind(this);
  };

  hendleChangeColor() {
    if (this.state.numClick % 2 === 0 && this.state.numClick !== 0) {
      this.setState({background: 'green'});
    } else {
      this.setState({background: 'white'});
    }
  }
  hendleClick() {
    this.setState((numAnterior, _props) => ({
      numClick: numAnterior.numClick +1
    }), () => this.hendleChangeColor());
  }

  render() {
    const { btn } = this.props;
    return(
      <button onClick={ this.hendleClick } style={{backgroundColor: this.state.background }}>{btn} - clicou { this.state.numClick }</button>
    )
  }
}

export default Button;