import React from 'react';

const Post = (props) => (
    <div className='post'>
      <img className='post__img' href='https://stackoverflow.com' src={props.src} alt={props.title}></img>
      <p className='post__date'>{props.date}</p>
      <a className='post__title' href='https://github.com'>{props.title}</a>
      <p className='post__headline'>{props.byline} <a className='post__link' href='https://udemy.com'>{props.link}</a></p>
      <hr className='post__underline'></hr>
    </div>
);

export default Post;
