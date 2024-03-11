import axios from 'axios';
import React, { useEffect, useState } from 'react'

const APIusingAxios06 = () => {

    const [myData, setMyData] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            setMyData(response.data);
            console.log(response.data);
        })
    },[]);
  return (
    <div>
      {myData?.map((item, index)=>(
        <h3 key={index}> {index} : {item.title} {item.id}</h3>        
      ))}
    </div>
  )
}

export default APIusingAxios06
