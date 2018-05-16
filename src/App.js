import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './PostList'

class App extends Component {

  state  = {
      postsList: [
        { id:1, content : "Postagem 1 lalala " , type : 'text' },
        { id:2, content : "pica_pau.jpg",  type : 'img'},
        { id:3, content : "Postagem 3 lalala ",  type : 'video'},
      ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <PostList posts={this.state.postsList} />

      </div>
    );
  }
}

export default App;
