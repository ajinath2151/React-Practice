import axios from 'axios';
import React, { useState } from 'react'

const APIusingAxios2 = () => {

    const [mydata,setMydata] = useState([]);
    useState(()=>{
        axios.get("https://jsonplaceholder.typicode.com/albums/1/photos")
        .then((response)=>{
            setMydata(response.data);
        });
    },[])
    console.log(mydata);
  return (
    <div>
      api axios 2
      {mydata?.map((item,index)=>(
        <div>{item.id}{item.title}</div>        
      ))}
    </div>
  )
}

export default APIusingAxios2
