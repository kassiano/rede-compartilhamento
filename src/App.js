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
import * as PostsAPI from './utils/PostsAPI'
import FriendsList from './components/FriendsList'


class App extends Component {

  state  = {
      postsList: [],
      users: null,
      loggedUser: null
      /* {
        name : 'Honey',
        email :'honey@gmail.com',
        passwd : 'A6xnQhbz4Vx2HuGl4lXwZ5U2I8iziLRFnhP5eNfIRvQ=',
        description: 'oiess, sou a honey .',
        profileImage: './images/honey.png'
      }*/
  }

  componentDidMount() {

    UsersAPI.getAll().then((users) => {

      console.log(users)
      this.setState({ users })
    })

  }


  onRegister = (user) => {

    let hash = crypto.createHash('sha256').update(user.passwd).digest('base64');

    user.passwd = hash

    UsersAPI.create(user).then(() => {
      this.setState(state => ({
        users: state.users.concat([ user ])
      }))

      alert('Usuario cadastrado com sucesso.')

    })

    return true

  }

  onLogin = (user, callback)=> {

    if(!user.passwd){
      return false
    }

    let hash = crypto.createHash('sha256').update(user.passwd).digest('base64');

    let userLogin = this.state.users.filter(u => u.email === user.email && u.passwd === hash )


    if(userLogin.length > 0){

      PostsAPI.getAll().then((posts) => {

        this.setState({
          loggedUser : userLogin[0],
          postsList: posts
        })

      callback()

      })

    }else{
      alert('Falha na autenticação. Usuário ou senha incorretos.')
      /*
      this.setState({
        loggedUser : null
      })
      */
      
    }


  }


  addPost = (post)=>{

    let idPost =  this.state.postsList.reduce( (a, p)=> {
      return a > p.id ? a : p.id
    } , 0) + 1

    post.id = idPost
    post.author = this.state.loggedUser
    post.likes = 0


    PostsAPI.create(post).then(() => {

      this.setState(state => ({
          postsList: state.postsList.concat([ post ])
      }))


    })


  }


  onLikePost = (post) =>{

    let qtdLikes = post.likes + 1

    this.setState(state => ({
      postsList: state.postsList.map(p=>
        p.id === post.id ? { ...p, likes : qtdLikes } : p
      )
    }))

  }

  onLogOut = () =>{

    this.setState({
      loggedUser: null
    })

  }

  onDeleteAccount = () => {
    let deletar  = window.confirm("Tem certeza que deseja deletar sua conta?")

    if(deletar){
      let user = this.state.loggedUser

      this.setState((state) => ({
        users : state.users.filter(u=> u.email !== user.email)
        ,loggedUser: null
      }))
    }

  }


  render() {

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
                     frindCount={ this.state.users ? this.state.users.length -1 : 0}
                     onLogOut={this.onLogOut}
                     onDeleteAccount={this.onDeleteAccount}
                     />

                   <PostList
                     posts={this.state.postsList}
                     onAddPost={this.addPost}
                     onLikePost={this.onLikePost}
                     />

                   <FriendsList
                     friends={
                        this.state.users ?
                        this.state.users.filter(f=> f !== this.state.loggedUser )
                        :[]
                      }
                     />
                 </div>

             ) : (

               <Redirect to="/login"/>

             )

         )}/>


       <Route path='/login' render={({ history }) => (
         <Login
             onLogin={(user) => {
             this.onLogin(user, () =>  history.push('/home'))


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
