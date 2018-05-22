import React, { Component } from 'react';
import UrlPreview from './UrlPreview'

class PostList extends Component{


  renderPost = (post) =>{

    switch (post.type) {
      case 'img':
          return (
            <div>
              <div>
                {post.content}
              </div>
              <img className="img-size" src={post.image} alt=""/>
            </div>
          )
      case 'video':
          return (
            <video width="320" height="240" controls>
              <source src={`./videos/${post.content}`} type="video/mp4"/>
            </video>
          )
      case 'code':
            return(
                <pre>
                  <code>
                      {post.content}
                  </code>
               </pre>
            )
      case 'link':
            return(
              <UrlPreview url={post.content} />
            )
      default:
        return (
            <pre>
                {post.content}
            </pre>
        )
    }

  }


  render(){
    const { posts } = this.props

    return(

        posts.map(p=> (

          <div className="card-post row" key={p.id}>
              <h4></h4>
              <div className="lead">
                  {this.renderPost(p)}
              </div>
              <small>
                  <hr/>
                  Postado em:
                  {p.postDate.getDate() + '/'+  (p.postDate.getMonth() + 1) + '/' +p.postDate.getFullYear()  }
              </small>
          </div>



        ))

    )


  }
}


export default PostList
