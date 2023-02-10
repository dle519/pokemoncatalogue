import React, {useState} from 'react';


function Counter({init=0}={}) {
    const [count, setCount] = useState(init);

    const onIncrement = () =>{
      setCount(count + 1);
    };
  
    const onDecrement = () => {
      setCount(count - 1);
    };
  
  return(
    <>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
        <div>{count}</div>
    </>
  )
}

export default Counter;