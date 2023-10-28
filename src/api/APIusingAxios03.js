import axios from 'axios';
import React, { useEffect, useState } from 'react'

const APIusingAxios03 = () => {

    const [myData,setMyData] = useState([]);

    useEffect(()=>{
        axios.get("https://dev-2iqxuizp9jl5aj8.api.raw-labs.com/json-programming-heroes")
        .then((response)=>{
            setMyData(response.data);
            console.log(response.data);
        })
    },[])
    // console.log(myData);

  return (
    <>
        
    <div>
        {myData?.map((item,index)=>(
            <div>{item.hero_name}</div>
        ))}  
    </div>
    </>
  )
}

export default APIusingAxios03
