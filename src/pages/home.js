import React from 'react';
import { Route, Link } from 'react-router-dom';
import HomeLayout from '../layouts/homeLayout';

class Home extends React.Component {
  render() {
    return (
      <HomeLayout title="Welcome">
        <Link to="/user/add">添加用户</Link>
        <br/>
        <Link to="/user/list">用户列表</Link>
      </HomeLayout>
    );
  }
}

export default Home;