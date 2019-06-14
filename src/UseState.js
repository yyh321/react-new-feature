import React, { useState } from 'react';

function UseState() {
  //  const [count,setCount] = useState(0)
  // 延时加载，只会调用一次
   const [count,setCount] = useState(() => {
     console.log('hello,yyh123');
     return 0;
   })
  return (
    <button onClick = {() => setCount(count+1)}>
      Click({count})
    </button>
  )
}


export default UseState;
