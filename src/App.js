import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList'
import PublishBlock from './components/PublishBlock'

class App extends Component {

  state  = {
      postsList: [
        /*
        { id:1, content : "Postagem 1 lalala " , type : 'text' },
        { id:2, content : "pica_pau.jpg",  type : 'img'},
        { id:3, content : "video_teste.mp4",  type : 'video'},
        { id:4, content : "val x = 10",  type : 'code'},
        { id:5, content : "pica_pau.jpg",  type : 'img'},
        { id:6, content : "http://google.com",  type : 'link' },
        */
      ]
  }


  addPost = (post)=>{

    let idPost =  this.state.postsList.reduce( (a, p)=> {
      return a > p.id ? a : p.id
    } , 0) + 1

    post.id = idPost

    this.setState(state => ({
      postsList: state.postsList.concat([ post ])
    }))

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <PublishBlock onAddPost={this.addPost} />
        <PostList posts={this.state.postsList} />

      </div>
    );
  }
}

export default App;
