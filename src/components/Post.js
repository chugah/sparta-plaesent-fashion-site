import React, { Component } from 'react';

class Post extends Component {
  render() {
    return (
      <div className='post'>
        <img className='post__img' href='https://stackoverflow.com' src={this.props.src} alt={this.props.title}></img>
        <p className='post__date'>{this.props.date}</p>
        <a className='post__title' href='https://github.com'>{this.props.title}</a>
        <p className='post__headline'>{this.props.byline} <a className='post__link' href='https://udemy.com'>{this.props.link}</a></p>
        <hr className='post__underline'></hr>
      </div>
    )
  }
}

export default Post;
