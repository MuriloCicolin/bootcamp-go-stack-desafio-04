import React, { Component } from 'react';

import './Comment.css'

function Comment({data}) {
  return (
    <>
      <div id="postReply">
        <div className="replyHeader">
          <img src={data.author.avatar} alt="" />
          <span>{data.date}</span>
          <span>{data.time}</span>
        </div>
        <div id="replyContent"><span className="userNameReply">{data.author.name} </span>{data.content}</div>
      </div>
    </>
  );
}

export default Comment;