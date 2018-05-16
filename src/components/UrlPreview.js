
//API KEY: 5afcb823e140dbfdafe35424837efcd9077bdc9bb010c

//
//http://api.linkpreview.net/?key=5afcb823e140dbfdafe35424837efcd9077bdc9bb010c&q=https://www.google.com
import React, { Component } from 'react';

const API_URL = 'http://api.linkpreview.net/'
const API_KEY = '5afcb823e140dbfdafe35424837efcd9077bdc9bb010c'

class UrlPreview extends Component{

  state = {
    urlData : {
      title: "",
      description: "",
      image: "",
      url: ""
    }
  }

  componentDidMount() {

    const url = this.props.url

    fetch(`${API_URL}?key=${API_KEY}&q=${url}`, {  })
      .then(res => res.json())
      .then(urlData => {

        this.setState({ urlData })

      })

  }

  render(){

    const { title , description , image, url } = this.state.urlData

    return(

      <div>
        <div>
          <img src={image} height="100" width="150" />
        </div>
        <div>
          <p> {title}</p>
          <p> {description}</p>
        </div>
        <div>
          <a target="_blank" href={url}>{url}</a>
        </div>

      </div>

    )
    
  }
}


export default UrlPreview
