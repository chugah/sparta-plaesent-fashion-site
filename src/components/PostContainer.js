/*
  This component's purpose is to render each post and its contents.
  It is also the parent component of Post.

  Several props are handed down to Post and the information for these
  props is obtained from PostData.

  There is a map method that iterates over the PostData to fetch each
  post's contents. It is these contents that are handed down as props
  to Post.

  Note the npm module uniqid is used to satisfy React's requirement for
  a unique key. Documentation for this module can be found at
  https://www.npmjs.com/package/uniqid.

  The styling for this component is found at ../styles/app.css from
  lines 109 to 175.
*/

import React, { Component } from 'react';
import uniqid from 'uniqid';
import PostData from './PostData';
import Post from './Post';

class PostContainer extends Component {
  render() {
    const postContent = PostData;
    return (
      <div className='post__container'>
        {postContent.map(post =>
          <div className='post__wrapper' key={uniqid()}>
            <Post
              key={uniqid()}
              id={post.id}
              date={post.date}
              title={post.title}
              byline={post.byline}
              link={post.link}
              src={post.src}
            />
          </div>
        )}
      </div>
    )
  }
}

export default PostContainer;
