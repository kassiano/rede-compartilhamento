import React, { Component } from 'react';


class PublishBlock extends Component{

  state = {
    content : '',
    contentType: 'text',
    image : null,
    classHidden: 'hidden'
  }

  updateContent = (text)=>{
    this.setState({ content: text })
  }

  updateContentType = (target)=>{

    let value = target.value

    let btns = [ this.btn_code,this.btn_img, this.btn_video, this.btn_link, this.btn_text  ]

    btns.filter(btn=> btn !== target ).map(btn=> btn.className = "btn")

    target.className = "btn btn-success"

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

    this.file_img.value = null

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

    const { content } = this.state


    return(

      <div className="row">
        <div className="col-md-6">


            <div className="form-group">
              <div className="col-sm-8">
                <textarea className="form-control" rows="2"
                  name="status" id="status"
                  placeholder="Anything special to share?"
                  value={content}
                  onChange={(event) => this.updateContent(event.target.value)} />

                  <div className={this.state.classHidden}>
                   <input type="file"
                     onChange={this.onImageChange.bind(this)}
                     ref={(ob) => this.file_img = ob }
                     className="filetype" id="group_image"/>
                   </div>

                <br/>
                  <button className="btn"
                      onClick={(event) => this.updateContentType(event.target)}
                      ref={(el) => this.btn_code = el }
                      value="code">Código</button>
                    &nbsp;
                  <button className="btn"
                          onClick={(event) => this.updateContentType(event.target)}
                          ref={(el) => this.btn_img = el }
                          value="img">Imagem</button>
                  &nbsp;
                  <button className="btn"
                          onClick={(event) => this.updateContentType(event.target)}
                          ref={(el) => this.btn_video = el }
                          value="video">Vídeo</button>
                  &nbsp;
                <button className="btn"
                          onClick={(event) => this.updateContentType(event.target)}
                          ref={(el) => this.btn_link = el }
                          value="link">Link</button>
                        &nbsp;
                <button className="btn btn-success"
                            onClick={(event) => this.updateContentType(event.target)}
                            ref={(el) => this.btn_text = el }
                            value="text">Texto</button>
                          &nbsp;
                 <br/><br/>

              </div>

              <div className="col-sm-4">
                <button type="submit"
                  className="btn btn-success btn-block btn-lg"
                  onClick={ (event) => this.onAddPost(event) }
                  >Post</button>
              </div>
            </div>

        </div>
        <div className="col-md-6">

        </div>
      </div>

    )


  }
}


export default PublishBlock
