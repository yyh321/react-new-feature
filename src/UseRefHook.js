import React, { useState, useRef,useCallback,useEffect } from "react";

// useRef两种使用场景
// 1、获取子组件或者DOM节点的句柄
// 2、渲染周期直接共享数据的存储

class Counter extends React.PureComponent {
  speak() {
    console.log(`now counter is ${this.props.count}`);
  }
  render() {
    const { props } = this;
    return(
      <h1 onClick={props.onClick}> {props.count} </h1>
    )
  }
}

function App(props) {
  const [count, setCount] = useState(0);
  const counterRef = useRef();// 用法1
  const it = useRef();// 用法2


  const onClick = useCallback(() => {
    console.log(counterRef.current.speak());
  }, [counterRef]);

  useEffect(() => {
   it.current = setInterval(() => {
      setCount(count => count+1)
    }, 1000);
  },[]);

  useEffect(() => {
    if(count >=10) {
      clearInterval(it.current);
    }
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click me ({count}) </button>
      <Counter onClick={onClick} ref={counterRef} count={count} />
    </div>
  );
}

export default App;
