import React from 'react';
import HomeLayout from '../layouts/homeLayout';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: []
    }
  }

  componentWillMount() {
    fetch('http://localhost:3008/user')
    .then(res => res.json())
    .then(res => {
      this.setState({
        userList: res
      });
    })
    .catch(err => {
       console.error(err)
    });;
  }

  handleEdit (user) {
    console.log(user);
  }

  handleDel (user) {
    console.log(user);
    const confirmed = confirm(`确定要删除用户 ${user.name} 吗？`);

    if (confirmed) {
      fetch('http://localhost:3008/user/' + user.id, {
        method: 'delete'
      })
      .then(res => res.json())
      .then(res => {
        this.setState({
          userList: this.state.userList.filter(item => item.id !== user.id)
        });
        alert('删除用户成功');
      })
      .catch(err => {
        console.error(err);
        alert('删除用户失败');
      });
    }
  }

  render() {
    const {userList} = this.state;
    console.log(userList);
    return (
      <HomeLayout title="用户列表">
        <table>
            <thead>
              <tr>
                <th>用户ID</th>
                <th>用户名</th>
                <th>性别</th>
                <th>年龄</th>
                <th>操作</th>
              </tr>
            </thead>

            <tbody>
              {
                userList.length> 0 && userList.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.gender}</td>
                      <td>{user.age}</td>
                      <td>
                        <a href="javascript:;" onClick={() => this.handleEdit(user)}>编辑</a>
                        &nbsp;
                        <a href="javascript:;" onClick={() => this.handleDel(user)}>删除</a>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
      </HomeLayout>
    );
  }
}

export default UserList;