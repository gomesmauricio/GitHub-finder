import React, { Component } from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      github: {
        url: "https://api.github.com/users",
        client_id: "9766275" ,
        client_secret: "MDQ6VXNlcjk3NjYyNzU=",
        count: 7,
        sort: "created: asc"
      },
      user: [],
      repos: []
    };
  }
  getUser = (e) => {
    const user = e.target.value; 
    const { url, client_id, client_secret, count, sort } = this.state.github;
    axios
    .get(
      `${url}/${user}?cliente_id=${client_id}&cliente_secret=${client_secret}`
    )
    .then(({ data }) => this.setState({user: data}));
  }
  render() {
    const { user } = this.state;
    
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="card card-body">
            <h1>Pesquisar Usuário do GitHub</h1>
            <p className="lead">Digite um nome para encontrar usuários e repositórios</p>
            <input onChange={this.getUser}  id="search" type="text" className="form-control" required />
          </div>
          {user.lenght !=0 ? <Profile user={user} /> : null}
        </div>
      </div>

    );
  }
}

export default App;
