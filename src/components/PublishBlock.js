import React, { Component } from 'react';


class PublishBlock extends Component{

  state = {
    content : '',
    contentType: 'text',
    image : null,
    classHidden: 'hidden',
    btnPublish:''
  }

  updateContent = (text)=>{
    this.setState({ content: text })
  }

  updateContentType = (target)=>{

    let value = target.value

    let classHidden = 'hidden'
    if(value === 'img' || value == 'video'){
        classHidden = ''
    }

    this.setState({ contentType: value, classHidden })
  }

  onAddPost = (e)=> {
    e.preventDefault()

    const { content, contentType , image } = this.state

    let post = { content  , type : contentType , postDate : new Date() }


    if(post.type === 'img'){
      post.image = image
    }

    this.props.onAddPost(post)

    this.setState({
      content: '',
      image : null
    })

    //this.file_img.value = null

  }

  onImageChange(event) {
      if (event.target.files && event.target.files[0]) {
          let reader = new FileReader();
          reader.onload = (e) => {
              this.setState({
                image: e.target.result,
                contentType : 'img'
              });
          };
          reader.readAsDataURL(event.target.files[0]);

      }
    }


  render(){
    const { content } = this.state;
    const enabled = content.length > 0 ;

    return(

      <li className="rv b agz">
        <div className="input-group">
          <textarea type="text" className="form-control" placeholder="Message"
            value={this.state.content}
            onChange={(event)=>{this.updateContent(event.target.value)}}
            />
          <div className="bpt">

            <button type="button" className="btn btn-outline-success my-2 my-sm-0" onClick={(event) => this.onAddPost(event)}
              disabled={!enabled}>
              Publicar
            </button>

          </div>
        </div>

      </li>

    )


  }
}


export default PublishBlock
