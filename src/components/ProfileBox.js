import React, { Component } from 'react';

class ProfileBox extends Component{


  onLogOut = (event)=>{
    event.preventDefault()

    if(this.props.onLogOut)
      this.props.onLogOut()
  }

  onDeleteAccount = (event)=>{
    event.preventDefault()

    if(this.props.onDeleteAccount)
      this.props.onDeleteAccount()
  }

  render(){

    const { loggedUser, frindCount } = this.props

    return(

      <div className="fj">
      <div className="pz bpi afo">
        <div className="qf"></div>
        <div className="qa avz">
          <a href="#">
            <img className="bpj" src={loggedUser.profileImage} />
          </a>

          <h6 className="qb">
            <a className="boa" href="#">
              {loggedUser.name}
            </a>
          </h6>

          <p className="afo">
            {loggedUser.description}
          </p>

          <ul className="bpk">
            <li className="bpl">
              <a href="#" className="boa" data-toggle="modal">
                Amigos
                <h6 className="aej">
                  {frindCount}
                </h6>
              </a>
            </li>

          </ul>
        </div>
      </div>

      <div className="pz vp vy afo">
        <div className="qa">
          <h6 className="afh">Configurações</h6>
          <ul className="dc axg">
            <li><span></span><a href="#">editar perfil </a>
            </li><li><span></span><a href="#" onClick={(event)=> this.onDeleteAccount(event) }>deletar conta</a>
            </li><li><span></span><a href="#" onClick={(event)=> this.onLogOut(event)}>sair</a>
          </li></ul>
        </div>
      </div>


  </div>
    )


  }
}


export default ProfileBox
