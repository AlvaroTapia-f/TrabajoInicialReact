import { useEffect, useState } from "react"

const ComponentUseEffect = () => {

    const [state, setState] = useState(false);

    useEffect(()=>{
        console.log('Estoy');
        
    }, []);
    useEffect(()=>{
        console.log(state);        
    }, [state]);

  return (
    <>
    <h2>Componente useEffect</h2>
    <button onClick={()=>{setState(!state)}}>Cambiar estado</button>
    </>
  )
}

export default ComponentUseEffect