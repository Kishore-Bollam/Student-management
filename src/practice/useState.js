import React, { useState } from 'react'

const UseState = () => {

    const [name , setName] = useState("kishore kumar bollam")
    const [count , setCount] = useState(0)
  return (
    <div>
   <h1>{name}</h1>
   <button onClick={()=>setName("bollam")}>click me</button>


   <h1>{count}</h1>
   <button onClick={()=>setCount(count + 1)}>increment</button>
   <button onClick={()=>setCount(count - 1)}>decrement</button>


    </div>
  )
}

export default UseState
