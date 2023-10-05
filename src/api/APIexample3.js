import { tr } from 'date-fns/locale';
import React, { useEffect, useState } from 'react'

const APIexample3 = () => {

    const [data,setData] = useState();

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users/1/albums")
        .then((result)=>{
            result.json().then((response)=>{
                setData(response);
            });
        });
    },[])
    console.log(data);
  return (
    <>
       <table border={1}>
            <tbody>
                <th>
                    <td>User Id</td>
                </th>
                <th>
                    <td>Id</td>
                </th>
                <th>
                    <td>Title</td>
                </th>
                {data?.map((item,index)=>(
                    <tr key={index}>
                        <td>{item.userId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                    </tr>
                ))}
            </tbody>
       </table>
    </>
  )
}

export default APIexample3
