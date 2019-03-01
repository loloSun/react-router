import React, { Component } from 'react';
import {Route,Link,Switch} from 'react-router-dom'
import Add from './Add';
import List from './List';

class User extends Component {
    render() {
        return (
            <div  className="row">
                {/* 用户中心 */}
                <div className="col-2">
                {/* 导航 */}
                <nav className="nav flex-column">
                    <Link to={{pathname:'/user/add'}} className="nav-item">添加用户</Link>
                    <Link to={{pathname:'/user/list'}} className="nav-item">用户列表</Link>
                </nav>
                </div>
                {/* 路由 */}
                <div className="col-10">
                    <Switch>
                        <Route path='/user' component={Add} exact={true}></Route>
                        <Route path='/user/add' component={Add}></Route>
                        <Route path='/user/list' component={List}></Route>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default User;