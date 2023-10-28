import axios from 'axios';
import React, { useEffect, useState } from 'react'

const APIusingAxios04 = () => {

    const [myData,setMyData] = useState();

    useEffect(()=>{
        axios.get("https://reqres.in/api/users?page=2")
        .then((response)=>{
            setMyData(response.data.data)
            console.log(response.data.data);
        })
    },[])
  return (
    <div>
      <h1>

        {myData?.map((item,index)=>(
            <div>&nbsp;&nbsp;&nbsp;{item.id}  &nbsp;&nbsp;&nbsp;&nbsp; {item.email}</div>
            ))}
            </h1>
    </div>
  )
}

export default APIusingAxios04
