import React from 'react';
import axios from 'axios';

import Post from './../../../components/Post/Post';
import style from './Posts.module.css';

class Posts extends React.Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    console.log(this.props);
    try {
      const response = await axios.get('/posts');
      const posts = response.data.slice(0, 4);
      const updatePost = posts.map(post => {
        return { ...post, author: 'Author' + post.id };
      });
      this.setState({ posts: updatePost });
    } catch (e) {
      console.log(e);
      //   this.setState({ error: true });
    }
  }

  postSelectedHandler = id => {
    this.setState({ selectedPostId: id });
  };

  render() {
    let posts = <p style={{ textAlign: 'center' }}>Something went wrong!💥</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        );
      });
    }

    return <section className={style.Posts}>{posts}</section>;
  }
}

export default Posts;
