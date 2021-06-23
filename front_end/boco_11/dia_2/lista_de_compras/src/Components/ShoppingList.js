import React, { Component } from 'react'

class ShoppingList extends Component {
  render() {
    const list = ['Arroz', 'Feijão', 'Óleo', 'Leite', 'Café']
    return(
      list.map((item, index) => {
        return(
          <li key={index}> {item} </li>
        )
      })
    )
  };
};

export default ShoppingList