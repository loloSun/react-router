import React,{Component} from 'react';
import {render} from 'react-dom';
// 路由,重定向,导航
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
// import './common/reset.css'
import Home from './container/Home';
import User from './container/User';
import Profile from './container/Profile';
import App from './container/App';
import 'bootstrap/dist/css/bootstrap.css'
import './reset.css'
import Detail from './container/Detail';
class Index extends Component{
    render(){
        return(
            <div>
                <Router> 
                    <div>
                        <App>
                            <Switch>
                                <Route path='/' exact={true} component={Home} />
                                <Route path='/user' component={User} />
                                <Route path='/profile' component={Profile} />
                                <Route path='/detail/:id' component={Detail} />
                                <Redirect to='/' />
                            </Switch>
                        </App>
                    </div>
                </Router>
            </div>
        )
    }
}
render(<Index/>,document.getElementById('root'))