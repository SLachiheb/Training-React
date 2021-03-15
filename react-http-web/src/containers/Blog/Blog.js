import React, { Component } from 'react';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import { Switch, Route, Link } from 'react-router-dom';

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: '/new-post',
                    hash: '#submit',
                    search: '?quick-submit=true',
                  }}
                >
                  New Post
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/new-post" component={NewPost} />
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
