import React, { useState, createContext,useContext } from "react";

const CountContext = createContext();

// Consumer写法
class Foo extends React.Component {
  render() {
    return(
      <div>
        <CountContext.Consumer>
          {
            count => <h1> {count} </h1>
          }
        </CountContext.Consumer>
      </div>
    )
  }
}

// contextTye 用法
class Bar extends React.Component {
  static contextType = CountContext;
  render() {
    const count = this.context;
    return (
      <div>
        <h1> {count} </h1>
      </div>
    );
  }
}

// useContext用法
function Counter() {
  const count = useContext(CountContext);
  return (
    <h1> {count} </h1>
  );
}

function App(props) {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}> click me ({count}) </button>
      <CountContext.Provider value={count} >
        <Foo />
        <Bar />
        <Counter />
      </CountContext.Provider>
    </>
  );
}

export default App;
