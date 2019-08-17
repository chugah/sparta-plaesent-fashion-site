import React, { Component } from 'react';
import uniqid from 'uniqid';
import PostData from './PostData';
import Post from './Post';

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.widthChange)
  }

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
