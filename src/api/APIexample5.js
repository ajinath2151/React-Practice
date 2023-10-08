import tr from 'date-fns/esm/locale/tr/index.js';
import React, { useEffect, useState } from 'react'

const APIexample5 = () => {

    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users/1/posts")
        .then((result)=>{
            result.json().then((response)=>{
                setData(response);
            });
        });
    },[])
    console.log(data);
  return (
    <div>
        <table>
            <tbody>
                <tr>
                    <th>
                        <td>User Id</td>
                    </th>
                    <th>
                        <td>Id</td>
                    </th>
                    <th>
                        <td>Title</td>
                    </th>
                    <th>
                        <td>Body</td>
                    </th>
                </tr>
                {data?.map((item,index)=>(
                    <tr key={index}>
                        <td>{item.userId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default APIexample5
