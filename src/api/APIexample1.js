import React, { useEffect, useState } from 'react'

const APIexample1 = () => {

    const [data, setData] = useState();
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
        .then((result)=>{
            result.json().then((response)=>{
                setData(response);
            });
        });
    },[])
    console.log(data);
    // useEffect = ()=>(({

    // }))
  return (
    <>
        <table border={2}>
            <tbody>
                <th>
                    <tr>
                        <td>Post ID</td>
                    </tr>
                </th>                
                <th>
                    <tr>
                        <td>ID</td>
                    </tr>
                </th>                
                <th>
                    <tr>
                        <td>Name</td>
                    </tr>
                </th>                
                <th>
                    <tr>
                        <td>Email</td>
                    </tr>
                </th>                
                <th>
                    <tr>
                        <td>Body</td>
                    </tr>
                </th>                                                    
                {data?.map((item,index)=>(
                    <tr key={index}>
                        <td>{item.postId}</td>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.body}</td>
                    </tr>
                ))}
            </tbody>
        </table>  
    </>
  )
}

export default APIexample1
