import React, { Component } from 'react';

import './Blog.css';
import Posts from './Posts/Posts';
import { Switch, Route } from 'react-router-dom';

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/new-post">New Post</a>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route
            path="/new-post"
            render={() => {
              return <h1>New Post</h1>;
            }}
          />
          <Route path="/" component={Posts} exact />
        </Switch>
      </div>
    );
  }
}

export default Blog;

// {/* <section className="Posts">{posts}</section> */}
// {/* <section>
//   <FullPost id={this.state.selectedPostId} />
// </section>
// <section>
//   <NewPost />
// </section> */}
