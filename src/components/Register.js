import React, { Component } from 'react';
import serializeForm from 'form-serialize'
import ImageInput from './ImageInput'

class Register extends Component{

  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })

    if (this.props.onRegister)
      this.props.onRegister(values)

  }

  render(){

    return(

      <div className="padding-10 jumbotron">
            <form className="form-horizontal"
              onSubmit={this.handleSubmit} >

<div className="form-group">
  <div className="cols-sm-10">
    <div className="input-group">

              <ImageInput
                className='create-contact-avatar-input'
                name='profileImage'
                maxHeight={64}
              />

          </div>
          </div>
        </div>
              <div className="form-group">
                  <label htmlFor="username" className="cols-sm-2 control-label">Nome de usuário</label>
                  <div className="cols-sm-10">
                      <div className="input-group">
                          <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
                          <input type="text" className="form-control" name="name" id="name"  placeholder="Nome de usuário"/>
                      </div>
                  </div>
              </div>

              <div className="form-group">
                  <label htmlFor="description" className="cols-sm-2 control-label">Descrição</label>
                  <div className="cols-sm-10">
                      <div className="input-group">
                          <span className="input-group-addon"><i className="fa fa-align-justify fa" aria-hidden="true"></i></span>
                          <input type="text" className="form-control" name="description"
                            id="description"
                            placeholder="Fale um pouco sobre você"/>
                      </div>
                  </div>
              </div>

                <div className="form-group">
                    <label htmlFor="email" className="cols-sm-2 control-label">Email</label>
                    <div className="cols-sm-10">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
                            <input type="text" className="form-control" name="email" id="email"  placeholder="Email"/>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="cols-sm-2 control-label">Senha</label>
                    <div className="cols-sm-10">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                            <input type="password" className="form-control" name="passwd" id="passwd"  placeholder="Senha"/>
                        </div>
                    </div>
                </div>



                <div className="form-group ">
                    <input type="submit" className="btn btn-outline-success my-2 my-sm-0" value="Register" />
                </div>

            </form>
        </div>

    )


  }
}

export default Register
