import React from 'react';
import './App.css';
import UserProfile from './Components/UserProfile';

class App extends React.Component {
  render() {
    const users = [
      {
        id: 102,
        name: "Angeli",
        email: "angeli@gmail.com",
        avatar: "https://i.pinimg.com/originals/74/69/85/746985ab750d62c9605322b2fef77184.jpg"
      },
      {
        id: 77,
        name:"Dandara",
        email:"dandara@gmail.com",
        avatar:"https://static.vecteezy.com/ti/vetor-gratis/p1/1834070-personagem-jovem-forte-africana-mulher-feminina-avatar-gr%C3%A1tis-vetor.jpg"
      }
    ];

    return (
      <div className="App">
        {users.map((user) => <UserProfile key={user.id} user={user} />)}
      </div>
    );
  }
}

export default App;