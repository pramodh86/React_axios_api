import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface todo{

    userId:number;
    id:number
    title:string
    completed:boolean

}

function Data() {

    let [data,setData] = useState<todo[]>([])
    let [error,setError] = useState(false)
    let [loading,setLoading] =useState(true)
    let baseURL = "https://jsonplaceholder.typicode.com/todos"

   let getData = async () => {

        try{
        let response = await axios.get(baseURL)
        setData(data=[...response.data])
        setLoading(false)
        setError(false)
        console.log(data)
        }catch(err){
            
            setLoading(false) 
            setError(true)

        }



   }



    useEffect(()=>{


        
            getData()


             







    },[])

   if(error)
    { return <h1>Error</h1>}


  return (
    <>
        

      {   loading == true ? <h1>Loding</h1> : 
        
      
      data.map((todo,index) => {

            return <h3 key={index}>{todo.title}</h3>

      })    }
    
    
    
    </>
  )
}

export default Data