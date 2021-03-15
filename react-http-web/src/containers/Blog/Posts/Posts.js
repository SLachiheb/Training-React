import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import Post from './../../../components/Post/Post';
import style from './Posts.module.css';
import FullPost from './../FullPost/FullPost';

class Posts extends React.Component {
  state = {
    posts: [],
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
      console.log(e);
    }
  }

  postSelectedHandler = id => {
    this.props.history.push({ pathname: '/posts/' + id });
  };

  render() {
    let posts = <p style={{ textAlign: 'center' }}>Something went wrong!💥</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          // <Link to={'/posts' + post.id} key={post.id}>
          <Post
            title={post.title}
            author={post.author}
            key={post.id}
            clicked={() => this.postSelectedHandler(post.id)}
          />
          // </Link>
        );
      });
    }

    return (
      <div>
        <section className={style.Posts}>{posts}</section>;
        <Route path={this.props.match.url + '/:postId'} component={FullPost} />
      </div>
    );
  }
}

export default Posts;
