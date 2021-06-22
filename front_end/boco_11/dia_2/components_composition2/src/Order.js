import React from 'react';

class Order extends React.Component {
  reader() {
    const { user, product, price } = this.props.order;

    return(
      <div>
        <p> {user} bought {product} for {price.value} {price.currency} </p>
      </div>
    )
  }
}

export default Order;