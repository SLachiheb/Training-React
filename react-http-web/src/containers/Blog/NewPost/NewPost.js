import axios from 'axios';
import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';

import style from './NewPost.module.css';

class NewPost extends Component {
  state = {
    title: '',
    content: '',
    author: 'Max',
    submitted: false,
  };

  postDataHandler = async () => {
    const data = {
      title: this.state.title,
      body: this.state.content,
      author: 'Sarah',
    };
    await axios.post('/posts', data);
    // this.setState({ submitted: true });
    // this.props.history.push({ pathname: '/posts' });
    this.props.history.replace({ pathname: '/posts' });
  };

  render() {
    // let redirect = null;
    // if (this.state.submitted) {
    //   redirect = <Redirect to="/posts" />;
    // }
    return (
      <div className={style.NewPost}>
        {/* {redirect} */}
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={event => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={event => this.setState({ author: event.target.value })}
        >
          <option value="Max">Sarah</option>
          <option value="Manu">Cassandre</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
