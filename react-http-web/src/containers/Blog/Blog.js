import React, { Component, Suspense } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import style from './Blog.module.css';
// import Posts from './Posts/Posts';
// import asyncComponent from './../../hoc/asyncComponent';

const AsyncNewPost = React.lazy(() => import('./NewPost/NewPost'));
const AsyncPosts = React.lazy(() => import('./Posts/Posts'));
// const AsyncNewPost = asyncComponent(() => {
//   return import('./NewPost/NewPost');
// });

class Blog extends Component {
  state = {
    auth: true,
  };

  render() {
    return (
      <div className={style.Blog}>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts"
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
        <Suspense fallback={<div>Chargement...</div>}>
          <Switch>
            {this.state.auth ? (
              <Route path="/new-post" component={AsyncNewPost} />
            ) : null}
            <Route path="/posts" component={AsyncPosts} />
            <Route render={() => <h1> Not found </h1>} />
            {/* <Redirect from="/" to="/posts" /> */}
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default Blog;
