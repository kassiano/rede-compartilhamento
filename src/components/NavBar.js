import React, {Component} from 'react'
import { Link } from 'react-router-dom'


class NavBar extends Component{

  render(){

    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Rede de compartilhamento</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">

            <Link
              to='/home'
              className="nav-link">
              Home</Link>

            </li>
            <li className="nav-item">

            <Link
              to='/login'
              className="nav-link">
              Login</Link>

            </li>

            <li className="nav-item">
            <Link
              to='/register'
              className="nav-link">
              Register</Link>
            </li>

          </ul>
        
        </div>
      </nav>
    )

  }

}


export default NavBar
