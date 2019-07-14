import React, {useState,useEffect,useCallback} from 'react';

function useCount(defaultCount) {
  const [count,setCount] = useState(defaultCount);


  return [count,setCount];
}

function useCounter(count) {
  const size = useSize();
  return (
    <>
    <h1>{count}</h1>
    size: {size.width}x{size.height}
    </>
  );
}

function useSize() {
  const [size,setSize] = useState({
    width:document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
    
  })

  const onResize = useCallback(() => {
    setSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    });
  },[]);

  useEffect(() => {
    window.addEventListener("resize", onResize, false);
    return () => {
      window.removeEventListener("resize", onResize, false);
    };
  }, [onResize]);

  return size;
}

function App() {
  const [count, setCount] = useCount(10);
  const Counter = useCounter(0);
  const size = useSize();
  return (
    <div>
      <button onClick={() => setCount(count+1)}>click me ({count})</button>
      size: {size.width}x{size.height}
      {Counter}
    </div>
  )
}

export default App;

