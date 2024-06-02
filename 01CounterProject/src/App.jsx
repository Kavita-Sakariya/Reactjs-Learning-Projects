import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const [counter,setCounter]=useState(14)

  const addcounter= ()=>{
      if(counter===20){
        setCounter(counter)
        // console.log("Maximum Value should be 20 only")
        alert("Maximum Value should be 20")
      }
      else{
        setCounter(counter+1)
      }
      
  }

  const removecounter= ()=>{
    if(counter===0){
      setCounter(counter)
      console.log("Minimum Value is 0 only")
    }
    else{
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h3>Count: {counter}</h3>
      <button onClick={addcounter}>Increase Counter</button>  
      <button onClick={removecounter}>Decrease Counter</button>  
    </>
  )
}

export default App
