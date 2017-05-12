import React from 'react'

class UserAdd extends React.Component {
  constructor(match) {
    super();
    this.state = {
      form: {
        name: {
          valid: false,
          value: '',
          error: ''
        },
        age: {
          valid: false,
          value: 0,
          error: ''
        },
        gender: {
          valid: false,
          value: '',
          error: ''
        }
      }
    };
  }

  handleValueChange(field, value, type = 'string') {
     // 由于表单的值都是字符串，我们可以根据传入type为number来手动转换value的类型为number类型
    if (type === 'number') {
      value = +value;
    }

    const { form } = this.state;
    let newFiledObj = {value, valid: true, error:''};
    switch (field) {
      case 'name': {
        if(value.length >= 5) {
          newFiledObj.error = '用户名最多4个字符';
          newFiledObj.valid = false;
        } else if(value.length === 0) {
          newFiledObj.error = '请输入用户名'
          newFiledObj.valid = false;
        }
        break;
      }
      case 'age': {
        if(value > 100 || value <= 0) {
          newFiledObj.error = '请输入1~100之间的数字';
          newFiledObj.valid = false;
        }
        break;
      }
      case 'gender': {
        if(!value) {
          newFiledObj.error = '请选择性别';
          newFiledObj.valid = false;
        }
        break;
      }
    }

    this.setState({
      form: {
        ...form,
        [field]: newFiledObj
      }
    });
    console.log(this.state);
  }

  handleSubmit(e) {
    // 阻止表单submit事件自动跳转页面的动作
    e.preventDefault();
    //alert(JSON.stringify(this.state));
    const { form: {name, age, gender}} = this.state;
    if(!name.valid || !age.valid || !gender.valid) {
      alert('请填写正确的信息后重试');
      return;
    }
    let data = {
      "name": name.value,
      "age": age.value,
      "gender": gender.value
    }
    let option = {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }

    fetch('http://localhost:3008/user',option)
    .then((res) => res.json())
    .then(res=>{
       if (res.id) {
          this.setState({
            name: '',
            age: 0,
            gender: ''
          });
        } else {
          alert('添加失败');
        }
    })
    .catch(err => {
       console.error(err)
    });
  }

  render() {
    const {form: {name, age, gender}} = this.state;
    return (
      <div>
        <header>
          <h1>添加用户</h1>
        </header>

        <main>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <label>用户名:</label>
            <input
              type="text"
              value={name.value}
              onChange={(e) => this.handleValueChange('name', e.target.value)}
            />
            {!name.valid && <span>{name.error}</span>}
            <br/>
            <lable>年龄:</lable>
            <input
              type="number"
              value={age.value || ''}
              onChange={(e) => this.handleValueChange('age', e.target.value, 'number')}
            />
            {!age.valid && <span>{age.error}</span>}
            <br/>
            <label>性别:</label>
            <select
              value={gender.value}
              onChange={(e) => this.handleValueChange('gender', e.target.value)}
            >
              <option value="">请选择</option>
              <option value="male">男</option>
              <option value="female">女</option>
            </select>
            {!gender.valid && <span>{gender.error}</span>}
            <br/>
            <br/>
            <input type="submit" value="提交"/>
          </form>
        </main>
      </div>
    );
  }
}

export default UserAdd;