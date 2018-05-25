import React, { Component } from 'react';
import UrlPreview from './UrlPreview'
import { Card, CardTitle } from 'react-materialize'
import PublishBlock from './PublishBlock'

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

    const pad = (number, length)=> {
        var str = '' + number;
        while (str.length < length) {
            str = '0' + str;
        }
        return str;
    }

    console.log(posts)

    return(


      <div className="fm">

        <ul className="ca bow box afo">

        <PublishBlock onAddPost={this.props.onAddPost}/>

        { posts.reverse().map(p=> (


            <li className="rv b agz" key={p.id}>
            <img className="bos vb yb aff" src={p.author.profileImage} />
            <div className="rw">
              <div className="bpd">
                <div className="bpb">
                  <small className="acx axc">
                    {`${p.postDate.getDate()}/${pad(p.postDate.getMonth(),2)} `}
                  </small>
                  <h6>{p.author.name}</h6>
                </div>
                <pre>

                  {p.content}

                </pre>
              </div>
              <button className="cg nz ok" style={{
                  margin: '10px'
                }}>
                Gostei disso</button>
                <button className="cg nz ok">
                  Comentar</button>
            </div>
          </li>

        ))
      }

        </ul>

      </div>


    )


  }
}


export default PostList
