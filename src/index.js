
import React,{ Component } from 'react';
import { render } from 'react-dom';
import { Route,Link,Switch,BrowserRouter} from 'react-router-dom';
import {createHashHistory} from 'history';
import Test from './pages/test';
import App from './pages/app';
import Wa from './pages/wa';
import Home from './pages/home';
import UserAdd from './pages/user-add';

render(
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home}></Route>
        <Route path="/user/add" component={UserAdd}></Route>
      </div>
    </BrowserRouter>,
    document.getElementById('app')
)