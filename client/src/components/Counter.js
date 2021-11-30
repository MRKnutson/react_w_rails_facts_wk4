import React, {useState} from "react"
import { Link } from "react-router-dom";
import BorderedDiv from "./BorderedDiv";

const Counter = ()=> {
  const [count, setCount] = useState(0)

  const addCount = ()=>setCount(count+1)

  return (
    <BorderedDiv color = "yellow">
      <Link to="/">goto home</Link>
      <p>Count: {count}</p>
      <button onClick = {addCount}>Add to Count</button>
    </BorderedDiv>
  );
};

export default Counter;