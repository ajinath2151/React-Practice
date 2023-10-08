import React, { useEffect, useState } from 'react'

const APIexample4 = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users/1/todos")
        .then((result)=>{
            result.json().then((response)=>{
                setData(response);
            });
        });
    },[])
    console.log(data);
  return (
    <>
        <table>
            <tbody>
                <th>
                    <tr>
                        <td>User Id</td>
                    </tr>
                </th>
                <th>
                    <tr>
                        <td>Id</td>
                    </tr>
                </th>
                <th>
                    <tr>
                        <td>Title</td>
                    </tr>
                </th>
                <th>
                    <tr>
                        <td>Completed Status</td>
                    </tr>
                </th>
                {data?.map((item,index)=>(
                    <tr key={index}>
                        <td>{item.userId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.completed}</td>                        
                    </tr>
                ))}
            </tbody>
        </table>   
    </>
  )
}

export default APIexample4