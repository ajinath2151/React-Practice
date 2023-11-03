import axios from 'axios';
import React, { useEffect, useState } from 'react'

const APIusingAxios05 = () => {
    const [myData, setMyData] = useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response.data);
            setMyData(response.data)
        })
    },[])

  return (
    <div>
        <h1>
            {myData?.map((item,index)=>(
            <div>{item.id} &nbsp;&nbsp; {item.name}</div>        
            ))}
        </h1>
    </div>
  )
}

export default APIusingAxios05
