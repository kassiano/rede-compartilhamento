import React, { Component } from 'react';
import UrlPreview from './UrlPreview'
import { Card, CardTitle } from 'react-materialize'
import PublishBlock from './PublishBlock'

class PostList extends Component{


  renderPost = (text) =>{

      return text.replace(/@([a-z\d_]+)/ig, '<a href="#$1">@$1</a>');

  }


  onLikePost = (post)=>{
    this.props.onLikePost(post)
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



    return(


      <div className="fm">

        <ul className="ca bow box afo">

        <PublishBlock onAddPost={this.props.onAddPost}/>

        { posts.sort(function(a,b){return b.postDate - a.postDate}).map(p=> (

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

                  { p.content }

                </pre>
              </div>
              <span>{p.likes}</span><i className="fa fa-heart" style={{width:'20px'}}></i>
              <button className="cg nz ok"
                onClick={(event)=>{
                        this.onLikePost(p)
                    }
                  }
                 style={{
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
