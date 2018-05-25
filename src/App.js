import React, { Component } from 'react';
import './App.css';
import PostList from './components/PostList'
import PublishBlock from './components/PublishBlock'
import Login from './components/Login'
import crypto from 'crypto'
import { Route , Redirect } from 'react-router-dom'
import Register from './components/Register'
import ProfileBox from './components/ProfileBox'
import NavBar from './components/NavBar'
import * as UsersAPI from './utils/UsersAPI'
import FriendsList from './components/FriendsList'


class App extends Component {

  state  = {
      postsList: [],
      users: null,
      loggedUser: null
  }

  componentDidMount() {
      let users  =  UsersAPI.getAll()

      this.setState({
        users,
        loggedUser:users[1]
       })
  }


  onRegister = (user) => {

    let hash = crypto.createHash('sha256').update(user.passwd).digest('base64');

    user.passwd = hash

    this.setState(state => ({
      users: state.users.concat([ user ])
    }))

    alert('Usuario cadastrado com sucesso.')

    console.log(user);

    return true

  }

  onLogin = (user)=> {

    if(!user.passwd){
      return false
    }

    let hash = crypto.createHash('sha256').update(user.passwd).digest('base64');

    let userLogin = this.state.users.filter(u => u.email === user.email && u.passwd === hash )


    if(userLogin.length > 0){

      this.setState({
        loggedUser : userLogin[0]
      })

      return true

    }else{
      alert('Falha na autenticação. Usuário ou senha incorretos.')
      /*
      this.setState({
        loggedUser : null
      })
      */
      return false
    }


  }


  addPost = (post)=>{

    let idPost =  this.state.postsList.reduce( (a, p)=> {
      return a > p.id ? a : p.id
    } , 0) + 1

    post.id = idPost
    post.author = this.state.loggedUser
    post.likes = 0

    this.setState(state => ({
      postsList: state.postsList.concat([ post ])
    }))

  }


  onLikePost = (post) =>{

    

  }



  render() {

  //  var hash = crypto.createHash('sha256').update('1234').digest('base64');


    return (
      <div className="App">

        <main className="main bg-dark">

          <NavBar />

           <div className="by aha ahl">

         <Route exact path='/register' render={({ history }) => (
           <Register
               onRegister={(user) => {

               this.onRegister(user) && (
                  history.push('/login')
               )

             }}
              />

         )}/>


         <Route path='/home' render={() => (


             this.state.loggedUser !== null ? (

                 <div className="dp">

                   <ProfileBox
                     loggedUser={this.state.loggedUser}
                     frindCount={this.state.users.length -1}
                     />

                   <PostList
                     posts={this.state.postsList}
                     onAddPost={this.addPost}
                     />

                   <FriendsList
                     friends={this.state.users.filter(f=> f !== this.state.loggedUser )}
                     />
                 </div>

             ) : (

               <Redirect to="/login"/>

             )

         )}/>


       <Route path='/login' render={({ history }) => (
         <Login
             onLogin={(user) => {
             let loginOk = this.onLogin(user)
             if(loginOk){
               history.push('/home')
             }

           }}
            />
         )}/>

       <Route exact path='/' render={() => (

          this.state.loggedUser !== null ? (

            <Redirect to="/home"/>

          ) : (

            <Redirect to="/login"/>

          )

         )}/>


       </div>


    </main>



      </div>
    );
  }
}

export default App;
