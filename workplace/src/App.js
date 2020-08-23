import React, {useState} from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const newIncrement = () => setCount(previousCount => previousCount + 1)
  const newDecrement = () => setCount(previousCount => previousCount - 1)

  const reset = () => setCount(0)

  const multiplication = () => setCount(count * 2)

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={newIncrement}>+1</button>
        <button onClick={newDecrement}>-1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        <button onClick={multiplication}>✖︎2</button>
      </div>

    </>
  )
}

export default App