import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <div>
               <nav className="nav">
                    <NavLink className="nav-link" to='/' exact={true}>首页</NavLink>
                    <NavLink className="nav-link" to='/user'>用户中心</NavLink>
                    <NavLink className="nav-link" to='/profile'>个人中心</NavLink>
                </nav> 
            </div>
        );
    }
}
export default Nav;