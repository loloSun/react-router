## react 路由 项目 流程
1. 创建react项目
  ```
  npx create-react-app demo1
  ```
2. 启动项目
  ```
  npm start
  ```
  * PWA 重点了解
3. 删除无用文件
4. 规划文件目录
    - src
        - component 公用组件
            - Nav.js 导航组件
        - container 页面组件
            - Add.js
            - App.js
            - Detail.js
            - Home.js
            - List.js
            - Profile.js
            - User.js
        - index.js 入口文件
        - reset.css 样式

5. 进入项目文件夹并下载路由
    ```
    npm install react-router-dom
    ```
    官方文档：https://reacttraining.com/react-router/web/guides/philosophy 
6. 配置路由
   - <Router>里只能有一个子标签
   - exact 严格匹配
   - Switch 只渲染第一个与当前路径匹配的<Route/>或<Redirect/>，只匹配一个就不在继续匹配，子组件只能是<Route/>和<Redirect/>
   - Redirect 重定向
7. 配置导航
    ```
    <Link to='/'></Link>
    ```
8. 拆分导航
   <Nav /> 公共组件,放导航
   <App /> 组件，包住所有的路由组件，通过App.js内<Nav />组件和this.props.child展示路由
   - this.props.child 路由的集合
   * 写组件的时候保证组件功能的单一性
   * 组件名 class 首字母大写 component={Home} 属性小写
   - npm run eject 暴露webpack配置
   - npm install bootstrap@3 @后面表示文本号
   - <NavLink>可以用active添加激活样式
   - 路由跳转 this.props.history.push()
   - export导出 default默认
   - this.props.match.params.id 取路由参数
   - <Link to={{pathname:`/detail/${item.id}`,state:item}}>详情</Link>
     this.props.location.state 如果传入 state参数的时候取值的方法 刷新会变成undefined

