import React, { useState, useMemo,memo,useCallback} from "react";
 
 const Counter = memo(function Counter(props) {
   console.log('Counter render');
  return <h1 onClick = {props.onClick}>{props.count}</h1>;
});

function App(props) {
  const [count, setCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  // useMemo语法和useEffect是一致的，第一个参数是一个函数,和useEffect区别是，useMemo有返回值，返回值参与渲染，在渲染期间调用
  const double = useMemo(() => {
    return count * 2;
  }, [count === 3]);

  // 每次返回一个句柄，不会使得Counter组件多次渲染问题,如果不用useMemo，则Counter会渲染多次
  // useCallBack是useMemo的变种
  // const onClick = useMemo(() => {
  //   return () => {
  //     console.log("click");
  //   };
  // }, []);

  // useCallBack是useMemo的变种,如果useMemo返回是一个函数，可以用useCallBack替换 useMemo(() => fn) == useCallBack(fn)
  const onClick = useCallback(() => {
    console.log("click");
    setClickCount((clickCount) => clickCount+1);
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        click me1({count}),double: ({double}){" "}
      </button>
      <Counter count={double} onClick={onClick} />
    </div>
  );
}

export default App;
