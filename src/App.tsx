import { useState } from "react"
import ComponentCounter from "./components/ComponentCounter/ComponentCounter"
import MiComponente from "./components/MiComponente/MiComponente"
import ComponentUseEffect from "./components/ComponentUseEffect/ComponentUseEffect"
import FormComponent from "./components/FormComponent/FormComponent"
import AppProduct from "./components/AppProduct/AppProduct"

const App = () => {



  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        {/* <MiComponente text={'Texto nuevo'} color={'red'} size={15}/>
        <MiComponente text={'Texto nuevo'} color={'red'}/>
        <MiComponente text={'Texto nuevo'} color={'red'} size={30}/>
        <ComponentCounter/>
        <ComponentUseEffect/> */}
        {/* <FormComponent></FormComponent> */}

        <AppProduct/>
    </div>
  )
}

export default App