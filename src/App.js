import React, { Component } from 'react';
import './App.css';
import PostList from './components/PostList'
import PublishBlock from './components/PublishBlock'
import Login from './components/Login'
import crypto from 'crypto'
import { Route } from 'react-router-dom'

class App extends Component {

  state  = {
      postsList: [],
      users: [{
        name : 'Kassiano',
        email :'kassiano.resende@gmail.com',
        passwd : 'A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ='
      }],
      loggedUser: null
  }


  onLogin = (user)=>{

    var hash = crypto.createHash('sha256').update(user.passwd).digest('base64');

    let userLogin = this.state.users.filter(u => u.email === user.email && u.passwd === hash )

    if(userLogin.length > 0){

      this.setState({
        loggedUser : userLogin[0]
      })

    }else{

      this.setState({
        loggedUser : null
      })
    }

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

  //  var hash = crypto.createHash('sha256').update('1234').digest('base64');



    return (
      <div className="App container">
        <div className="row main">

          <nav className="navbar navbar-default">
             <div className="container-fluid">
                 <div className="navbar-header">
                     <a className="navbar-brand" href="#">Rede compartilhamento</a>
                 </div>
                 <ul className="nav navbar-nav">
                     <li><a href="#">Home</a></li>
                     <li><a href="#">Login</a></li>
                     <li><a href="#">Register</a></li>
                 </ul>
             </div>
         </nav>


         <Route exact path='/home' render={() => (
           <div>
              <PublishBlock onAddPost={this.addPost} />
              <PostList posts={this.state.postsList} />
           </div>
         )}/>

       <Route exact path='/' render={({ history }) => (

          this.state.loggedUser !== null ? (

            <div>
               <PublishBlock onAddPost={this.addPost} />
               <PostList posts={this.state.postsList} />
            </div>

          ) : (
            <Login
                onLogin={(user) => {
                this.onLogin(user)
                history.push('/home')
              }}
               />

          )


         )}/>

        </div>


      </div>
    );
  }
}

export default App;
