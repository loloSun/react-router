import React, { Component } from 'react';
import User from './User';

class Add extends Component {
    addClick=()=>{
        // 把添加的用户存在本地存储的UserList里
        let userId = parseInt(Math.random()*100)
        // 保证取出的是数组 否则不能push
        let UserList = JSON.parse(localStorage.getItem('UserList')) || [];
        UserList.push({name:this.x.value,id:userId})
        localStorage.setItem('UserList',JSON.stringify(UserList))
        // 跳转到列表
        this.props.history.push('/User/List')
    }
    render() {
        return (
            <div>
                <div className='form-group'>
                    {/* 非受控组件 ref等于一个函数 表示元素被挂载到页面会立即调用此函数 并传入渲染后的dom元素中 this.refs.a.value */}
                    <input ref={x=>this.x=x} className='form-control' />
                </div>
                <button className='btn btn-primary' onClick={this.addClick}>添加</button>
            </div>
        );
    }
}

export default Add;