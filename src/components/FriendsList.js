import React, {Component} from 'react'


class FrindsList extends Component{

  render(){

    const { friends } = this.props

    return(

      <div className="fj">


      <div className="pz afo d-none vy">
        <div className="qa">
        <h6 className="afh">Lista de amigos</h6>
        <ul className="bow box">

        {friends.map((friend)=> (

          <li className="rv afa" key={friend.name}>
            <img className="bos vb yb aff" src={friend.profileImage} />
            <div className="rw">
              <strong>{friend.name}</strong> @{friend.name}
              <div className="bpa">
                <button className="cg nz ok">
                   Visitar perfil</button>
              </div>
            </div>
          </li>

        ))}

        </ul>
        </div>

      </div>

      <div className="pz bpm">
        <div className="qa">
          © 2018 Kassiano Resende
          <a target="_blank" href="https://github.com/kassiano">Github</a>
          <br/>
          Aplicativo desenvolvido em ReactJS para o curso de Informática para internet
          oferecido pelo SENAI SC e Unindustria
        </div>
      </div>
    </div>

    )
  }


}


export default FrindsList
