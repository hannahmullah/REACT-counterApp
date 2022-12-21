import { useState } from 'react';
import refresh from './refresh.svg';
import './App.css';

//using the STATE HOOK

function App() {
  const [counter, setCounter] = useState(0)

  const increase = () => {
    setCounter(counter => counter + 1)
  }
  const decrease = () => {
    setCounter(counter => counter - 1)
  }
  const resetCounter = () => {
    setCounter(0)
  }

  return (
    <div className='app'>

      <div className='container'>
        <p>Counter</p>

        <div className='count'>
          <h1>{counter}</h1>
        </div>
        <div className='buttons'>
          <button onClick={decrease}>-</button>

          <button onClick={increase}>+</button>

          <button onClick={resetCounter}>
            <img className='rImg' src={refresh}>
            </img>
          </button>
        </div>

      </div>
    </div>
  )

}

export default App;
