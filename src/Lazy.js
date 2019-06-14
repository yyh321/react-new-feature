import React, { Component, lazy, Suspense } from 'react';
// 传入一个没有参数的函数, import 动态导入
// lazy和Suspense配合一起使用
 const About = lazy(() => import( /* webpackChunkName: "about" */ './About.js'))

class Lazy extends Component {

  state = {
    hasError: false
  }

  // componentDidCatch() {
  //   this.setState({
  //     hasError: true
  //   })
  // }

  // 捕获组件的error boundary,该静态方法返回一个state数据，直接合并到state中
  static getDerivedStateFromError() {
    return {
      hasError: true
    }
  }

  render() {
    if (this.state.hasError) {
      console.log('has error');
      return <div>error!!!</div>
    }
    return (
      <div>
        {/* Suspense中的fallback参数为jsx实例 */}
        <Suspense fallback={<div>Loading...</div>}>
          <About></About>
        </Suspense>
      </div>
    )
  }
}

export default Lazy;
