import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {

      github: {
        url: "https://api.github.com.users",
        client_id: "044ecbe0f9cd24459823",
        client_secret: "440f7e976118b387fca6d14d9b742bf03d05",
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
    .then(({ data }) => this.setState({user:data}));
  }
  render() {
    console.log(this.state.user);
    return (
      <div className="App">
        <Navbar />

        <div className="container">
          <div className="card card-body">
            <h1>Pesquisar Usuário do GitHub</h1>
            <p className="lead">Digite um nome para encontrar usuários e repositórios</p>
            <input onChange={this.getUser}  id="serach" type="text" class="form-control" required />
          </div>
        </div>
      </div>

    );
  }
}

export default App;
