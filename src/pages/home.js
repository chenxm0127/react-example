import React from 'react';
import { Route, Link } from 'react-router-dom';
import UserAddPage from './user-add';

class Home extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Welcome</h1>
        </header>

        <div>
          <Link to="/user/add">添加用户</Link>
        </div>
      </div>
    );
  }
}

export default Home;