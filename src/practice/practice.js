import axios from "axios"
import { useEffect, useState } from "react"


  export const Pracice = ()=>{
    // const [count , setCount] = useState(0);
    // const [name , setName]= useState("kishore patel")
    const [data,setData] = useState()
    useEffect(()=>{
        console.log("kishore bollam")
    },[])
    useEffect(()=>{
         axios.get("https://dummyjson.com/products/1").then(
          res = res.json(item.products)
        )
    })

    return(
        <div>
      { data?.map(item=><li>{item.products}</li>)}
        </div>
    )

  }