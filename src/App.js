import React, { Component, useState } from "react";

import "./App.css";

function App(props) {
  const [count, setCount] = useState(() => {
    console.log('useState....');
    // 返回值就是useState初始值，该方法只会调用一次
    return 0;
  });

  return (
    // <div>hello</div>
    <button onClick={() => setCount(count + 1)}>
      Click me ({ count })
    </button>
  );
}

export default App;
