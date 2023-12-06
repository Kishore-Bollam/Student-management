import React, { useState } from 'react'

const UseState = () => {

    const [name , setName] = useState("kishore kumar bollam")
  return (
    <div>
   <h1>{name}</h1>
   <button onClick={()=>setName("bollam")}>click me</button>
    </div>
  )
}

export default UseState
