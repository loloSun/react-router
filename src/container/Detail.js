import React, { Component } from 'react';

class Detail extends Component {
    render() {
        let user;
        if(this.props.location.state){
            user = this.props.location.state
        } else {
            let UserList = JSON.parse(localStorage.getItem('UserList')) || [];
            let userId = this.props.match.params.id;
            user = UserList.find(item=>item.id == userId)
        }
        // console.log(this.props.location.state)
        return (
            <div>
                用户详情:
                <div>
                    用户编号：{user.id}
                </div>
                <div>
                    用户名：{user.name}
                </div>
            </div>
        );
    }
}

export default Detail;