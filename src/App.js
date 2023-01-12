import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0)
  const increaseHandle = () => setCount(count + 1)
  const decreaseHandle = () => {
    if(count > 0){
      setCount(count - 1)
    }
    else{
      alert('Decreasing smaller than 0 is not possible')
    }
  }
  
  return(
    <div className="counter">
      <h1>Counter : {count}</h1>
      <button onClick={increaseHandle}>Increase</button>
      <button onClick={decreaseHandle}>Decrease</button>
    </div>
  )
}
export default App;
