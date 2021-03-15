import React, { Component } from 'react';
import axios from 'axios';

import style from './FullPost.module.css';

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  async componentDidMount() {
    if (this.props.match.params.postId) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost &&
          this.state.loadedPost.id !== this.props.match.params.postId)
      ) {
        const post = await axios.get(
          `/posts/${this.props.match.params.postId}`
        );
        this.setState({ loadedPost: post.data });
      }
    }
  }

  deletePostHandler = async () => {
    await axios.delete(`/posts/${this.props.match.params.postId}`);
  };

  render() {
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
    if (this.props.match.params.postId)
      post = <p style={{ textAlign: 'center' }}>Loading...</p>;

    if (this.state.loadedPost) {
      post = (
        <div className={style.FullPost}>
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className={style.Edit}>
            <button className={style.Delete} onClick={this.deletePostHandler}>
              Delete
            </button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
