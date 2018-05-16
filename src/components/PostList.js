import React, { Component } from 'react';
import UrlPreview from './UrlPreview'

class PostList extends Component{


  renderPost = (post) =>{

    switch (post.type) {
      case 'img':
          return <img src="./images/pica_pau.jpg" height="100" width="100" />
      case 'video':
          return (
            <video width="320" height="240" controls>
              <source src={`./videos/${post.content}`} type="video/mp4"/>
            </video>
          )
      case 'code':
            return(
              <code>
                {post.content}
              </code>
            )
      case 'link':
            return(
              <UrlPreview url={post.content} />
            )
      default:
        return <p>{post.content}</p>
    }

  }


  render(){
    const { posts } = this.props

    return(

        posts.map(p=> (

          <div key={p.id}>

            {this.renderPost(p)}

          </div>
        ))

    )


  }
}


export default PostList
