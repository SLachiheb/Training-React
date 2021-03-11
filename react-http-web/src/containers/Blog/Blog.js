import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false,
  };

  async componentDidMount() {
    try {
      const response = await axios.get('/posts');

      const posts = response.data.slice(0, 4);
      const updatePost = posts.map(post => {
        return { ...post, author: 'Author' + post.id };
      });
      this.setState({ posts: updatePost });
    } catch (e) {
      this.setState({ error: true });
    }
  }

  postSelectedHandler = id => {
    this.setState({ selectedPostId: id });
  };

  render() {
    if (this.state.error)
      return <p style={{ textAlign: 'center' }}>Something went wrong!💥</p>;

    let posts = this.state.posts.map(post => {
      return (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.postSelectedHandler(post.id)}
        />
      );
    });

    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
