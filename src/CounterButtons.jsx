/* eslint-disable react/prop-types */


function CounterButtons({increment, decrement, reset}) {
  return (
    <>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
    </>
  
  )
}

export default CounterButtons