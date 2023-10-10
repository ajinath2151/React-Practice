import axios from 'axios';
import React, { useEffect, useState } from 'react'

const APIusingAxios = () => {

    const [myData, setMyData] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
        .then((response)=>{
            setMyData(response.data);
        })
    },[])
    console.log(myData);
  return (
    <>
        <h1>Axios Example 01</h1>   
        {myData?.map((item,index)=>(
            <div>{item.name}</div>
        ))}
    </>
  )
}

export default APIusingAxios
