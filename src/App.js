import React, { Component, useState, useEffect } from "react";

import "./App.css";

class App2 extends Component {
  state = {
    count: 0,
    size: {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }
  };

  onResize = () => {
    this.setState({
      size: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
    });
  };

  componentDidMount() {
    document.title = this.state.count;
    window.addEventListener("resize", this.onResize, false);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize, false);
  }

  componentDidUpdate() {
    document.title = this.state.count;
  }

  render() {
    const { count, size } = this.state;
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          {" "}
          Click ({count}) size: {size.width}x{size.height}
        </button>
      </div>
    );
  }
}

function App(props) {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });

  const onResize = () => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    });
  };
  // useEffect参数为函数,在render渲染后调用
  useEffect(() => {
    console.log("1111111");

    document.title = count;
    // useEffect第二个参数不传，每次都会被调用
  });

  useEffect(() => {
    console.log("22222222");
    window.addEventListener("resize", onResize, false);
    return () => {
      // 在视图被销毁之前被触发，组件卸载和重渲染两种情况都会触发
      window.removeEventListener("resize", onResize, false);
      // useEffect第二个参数是一个数组，只有数组的每一项都不发生改变的时候，useEffect才不会被调用
    };
  }, []);

  useEffect(() => {
    document.querySelector("#size").addEventListener("click", onClick, false);

    return () => {
      document
        .querySelector("#size")
        .removeEventListener("click", onClick, false);
    };
  });

  const onClick = () => {
    console.log("click");
  };

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me ({count}) </button>
      {count % 2 ? (
        <span id="size">
          size: {size.width}x{size.height}
        </span>
      ) : (
        <p id="size">
          size: {size.width}x{size.height}
        </p>
      )}
    </div>
  );
}

export default App;
