import Home from "./Home"
import Don from "./Don"
import { useState } from "react"
function App(){
    const [num, setNum] = useState(0)
    const [don, setDon] = useState('')
    return (
        <div className="App">
        <h1>Hello world!</h1>
        <Don />
        <Home />
        <h1>{num} {num === 15 ? '- u reached max symbols!!!' : num === 0 ? '- u have to type anything here!!!' : 
        num === 10 ? '- CHOO TAAAM' : ''}</h1>
        <button onClick={()=>{
           if(num < 15) setNum(num + 1)
        }}>+</button>

<button onClick={()=>{
          if(num > 0)  setNum(num - 1)

        }}>-</button>


<button onClick={()=>{
            setNum(num * 2)
        }}>*</button>

<button onClick={()=>{
            setNum(num / 2)
        }}>/</button>

<button onClick={()=>{
            setNum(num * 0)
        }}>reset</button>

<button onClick={()=>{
            setNum(15)
        }}>max</button>

<button onClick={()=>{
          if(num < 15)  setNum(num + 5)
        }}>+5</button>

<button onClick={()=>{
         if(num > 0)   setNum(num - 5)
        }}>-5</button>




        </div>

        

    )
}


export default App



