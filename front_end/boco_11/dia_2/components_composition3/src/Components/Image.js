import React, { Component } from 'react';

class Image extends Component {
  render() {
    return(
      <img src={this.props.img} alt={this.props.alternativeTxt}/>
    )
  }
}

export default Image