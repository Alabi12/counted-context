import CounterButtons from "./CounterButtons"

// eslint-disable-next-line react/prop-types
function Counter({count, increment, decrement, reset}) {
  return (
    <div>
        <div>{count}</div>
        <CounterButtons increment={increment} decrement={decrement} reset={reset}/>
    </div>
  )
}

export default Counter