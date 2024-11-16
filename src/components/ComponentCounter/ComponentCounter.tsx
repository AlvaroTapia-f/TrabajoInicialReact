import { useState } from "react"

const ComponentCounter = () => {

    const [counter, setCounter] = useState<number>(0);

    const incrementarCounter = ()=>{
        setCounter((c) => c + 1)
    }
    const decrementCounter = ()=>{
        if(counter > 0){
            setCounter((c) => c - 1)
        }
    }


  return (
    <>
    <h2>{counter}</h2>
    <button onClick={incrementarCounter}>Incrementar</button>
    <button onClick={decrementCounter}>Decrementar</button>
    </>
  )
}

export default ComponentCounter