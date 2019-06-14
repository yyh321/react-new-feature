import React, { Component,PureComponent,memo } from 'react';

// class Foo extends PureComponent {
//   // PureComponent有一定的局限性，只能比较第一层数据，如果是复杂数据，其中一个属性值发生变化，是监测不到的 person:{age:1},如age发生变化

//   // shouldComponentUpdate(nextProps,nextState) {
//   //   if(nextProps.name === this.props.name) {
//   //     // 如果name一样，不需要重新渲染
//   //     return false;
//   //   }
//   //   return true;
//   // }

//   render() {
//     console.log('Foo render');
//     return (
//       <div>
//         {this.props.person.age}
//       </div>
//     );
//   }
// }

// memo返回函数式组件，作用类似PureComponent
const Foo = memo(function Foo(props) {
  console.log('Foo render');
  return <div> {props.person.age} </div>
})

class Memo extends Component {

  state = {
    count: 0,
    person: {
      age: 20
    }
  }
  // 函数属性的写法，有一点的性能开销，但可以避免内联函数，重复被渲染问题,也能解决this指向问题
  callback = () => {
    console.log('object');
  }
  render() {
    const person = this.state.person
    return (
      <div>
        {/* count值的改变，引发组件的重新渲染 */}
        <button onClick={() => {
          person.age++
          this.setState({
            count: this.state.count+1
          })
        }} >Click me</button>
        {/* 如果传入一个内联函数，PureComponent 也会导致触发变化 */}
        {/* <Foo name="yyh123" person={person} cb = {() => {}} /> */}
        <Foo name="yyh123" person={person} cb = {this.callback} />
      </div>
    )
  }
}


export default Memo;