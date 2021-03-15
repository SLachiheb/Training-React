import React, { Component } from 'react';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
import { Switch, Route, NavLink } from 'react-router-dom';

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  exact
                  activeStyle={{
                    textDecoration: 'underline',
                    color: '#c5089c',
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: '/new-post',
                    hash: '#submit',
                    search: '?quick-submit=true',
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/" component={Posts} exact />
          <Route path="/new-post" component={NewPost} />
          <Route path="/:postId" component={FullPost} exact />
        </Switch>
      </div>
    );
  }
}

export default Blog;
