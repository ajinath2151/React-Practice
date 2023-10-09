import React, { useEffect, useState } from 'react'

const APIexample6 = () => {

    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch("https://dev-2iqxuizp9jl5aj8.api.raw-labs.com/json-programming-heroes")
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
            <th>
                <tr>
                    <td> Hero Name </td>
                </tr>
            </th>
            <th>
                <tr>
                    <td> Hero Superpower </td>
                </tr>
            </th>
            <th>
                <tr>
                    <td> Hero Uniform Color </td>
                </tr>
            </th>
            <th>
                <tr>
                    <td> Hero Wears Cap </td>
                </tr>
            </th>
            {data?.map((item,index)=>(
                <tr key={index}>
                    <td>{item.hero_name}</td>
                    <td>{item.hero_superpower}</td>
                    <td>{item.hero_uniform_color}</td>
                    <td>{item.hero_wears_cape?"true":"false"}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default APIexample6
