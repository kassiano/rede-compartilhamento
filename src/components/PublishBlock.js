import React, { Component } from 'react';
import validURL from '../utils/validator'

class PublishBlock extends Component{

  state = {
    content : '',
    contentType: 'text'
  }

  updateContent = (text)=>{

    this.setState({ content: text })
  }

  updateContentType = (value)=>{

    if(value === 'code'){
      this.setState({ contentType: 'code' })
    }

  }

  onAddPost = (e)=> {
    e.preventDefault()

    const { content, contentType  } = this.state

    let post = { content  , type : contentType }

    validURL(content) && (
       post.type='link'
    )

    this.props.onAddPost(post)

    this.setState({ content: '' })

  }

  render(){

    const { content } = this.state

    return(

      <div>
        <textarea rows="10" cols="70"
        value={content}
        onChange={(event) => this.updateContent(event.target.value)}
        />
        <br/>
        Código <input type="radio" name="code" value="code"
        onChange={(event) => this.updateContentType(event.target.value)}
         />
        <input type="button" value="Publicar" onClick={ (event) => this.onAddPost(event) } />
      </div>

    )


  }
}


export default PublishBlock
