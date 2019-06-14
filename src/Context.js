import React, { Component,createContext } from 'react';


const BatteryContext = createContext();

class Leaf extends Component {
  // 静态变量
  static contextType = BatteryContext
  render() {
    // contextType会获得一个context变量
    const battery = this.context;
    return (
      // 消费者,接受的值，必须以函数的形式
      // <BatteryContext.Consumer>
      //   {
      //     battery => <h1>Battery: {battery} </h1>
      //   }
      // </BatteryContext.Consumer>

      // 使用contextType改造Consumer，contextType是一个静态变量，在运行时会获得一个context变量

      <h1>Battery: {battery} </h1>

    )
  }
}

class Middle extends Component {
  render() {
    return <Leaf />
  }
}

class Context extends Component {
  state = {
    battery: 60
  }
  
  render() {
    const {battery} = this.state
    return (
      // 生产者,如果有多个Provider，嵌套写即可，顺序不重要
      <BatteryContext.Provider value = {battery}>
        <button onClick={() => this.setState({battery: battery+1})}>
          Click me
        </button>
        <Middle />
      </BatteryContext.Provider>
    )
  }
}

export default Context;