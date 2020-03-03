import React from 'react';
import './Post.css';
import Comment from './Comment';

function Post({ data }) {
  
  return (
    <>
     <div className="container">
       <div className="post">
        <div className="post-content">
          <div className="post-header">
            <img src={data.author.avatar} alt=""/>
            <div className="userDatePost">
              <span className="userName">{data.author.name} </span>
              <span className="datePost">{data.date}</span>
            </div>
          </div>
          <div id="postMessage">{data.content}</div>
          <hr/>
          {data.comments.map(comment => <Comment key={comment.id} data={comment} />)}
        </div>
       </div>
     </div>
    </>
  )
}

export default Post;