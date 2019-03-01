import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom'
class List extends Component {
    render() {
        let UserList = JSON.parse(localStorage.getItem('UserList')) || [];
        return (
            <div>
                
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">ID</th>
                            <th scope="col">用户名</th>
                            <th scope="col">详情</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        UserList.map((item,index)=>(
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td><Link to={{pathname:`/detail/${item.id}`,state:item}}>详情</Link></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default List;