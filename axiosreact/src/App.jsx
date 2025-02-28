import { useEffect, useState } from 'react'
import './App.css'
import axios, { Axios } from 'axios'
function App() {
   const[userData, setData]=useState([]);
   useEffect(()=>{
       axios.get('https://jsonplaceholder.typicode.com/posts')
       .then((res)=>{
        console.log(res.data)
        setData(res.data)

       })
   },[])

  return (
    <div>
     {userData.map((data)=>{
      return(
       <table >
        <thead id='table'>
       <tr> 
        <th>user Id{data.userId}</th>
        <th>Id no{data.id}</th>
        <th>Title{data.title}</th>
        <th>body{data.body}</th>
        
       </tr>
       </thead>
       </table>
      )
     })}
    </div>
  )
}


export default App
