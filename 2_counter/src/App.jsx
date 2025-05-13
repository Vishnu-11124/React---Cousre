import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () =>{
    //Setting counter max value = 5
    if (counter  < 5)
    {
      setCounter(counter + 1)
    } 
  }

  const removeValue = () =>{
    //Setting counter min value = 0
    if (counter != 0)
    {
      setCounter(counter - 1)
    }
  }

  return (
    <>
     <h1>React Counter Project</h1>
     <h2>Counter value : {counter}</h2>

     <button onClick={addValue}> Add Value </button>

     <button onClick={removeValue}> Remove value </button>
    </>
  )
}

export default App
