import React, { Component } from 'react';
import serializeForm from 'form-serialize'

class Login extends Component{

  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })

    if (this.props.onLogin)
      this.props.onLogin(values)

  }


  render(){

    return(

      <div className="padding-10">
            <form className="form-horizontal"
              onSubmit={this.handleSubmit} >

                <div className="form-group">
                    <label htmlFor="email" className="cols-sm-2 control-label">Email</label>
                    <div className="cols-sm-10">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
                            <input type="text" className="form-control" name="email" id="email"  placeholder="Enter your Email"/>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="cols-sm-2 control-label">Password</label>
                    <div className="cols-sm-10">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                            <input type="password" className="form-control" name="passwd" id="passwd"  placeholder="Enter your Password"/>
                        </div>
                    </div>
                </div>

                <div className="form-group ">
                    <input type="submit" className="btn btn-success btn-lg btn-block login-button" value="Log In" />
                </div>

            </form>
        </div>

    )


  }
}


export default Login
