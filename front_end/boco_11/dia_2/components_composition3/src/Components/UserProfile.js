import React, { Component } from 'react';
import Image from './Image';

class UserProfile extends Component {
  render() {
    const { user } = this.props
    return(
      <div>
        <Image img={user.avatar} alternativeTxt='User avatar'/>
        <p>Nome: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    )
  }
}

export default UserProfile