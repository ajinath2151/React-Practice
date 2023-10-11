import React, { useEffect, useState } from 'react'
import myApi from './OwnAPI.json';
const OwnAPIcall = () => {

    const [data,setData] = useState([]);
    useEffect(()=>{ 
        setData(myApi)         
    },[]);
    console.log(data);
  return (
    <>
      <table>
        <tbody>
          <th>
            <tr>
              <td>Name</td>
            </tr>
          </th>
          <th>
            <tr>
              <td>Mobile</td>
            </tr>
          </th>
          <th>
            <tr>
              <td>Alternate Mobile</td>
            </tr>
          </th>
          <th>
            <tr>
              <td>Father Contact </td>
            </tr>
          </th>
          <th>
            <tr>
              <td>Is Regular</td>
            </tr>
          </th>
          {data.map((item,index)=>(
          <tr>
            <td>{item.name}</td>
            <td>{item.mobile}</td>
            <td>{item.alternateMobile?item.alternateMobile:"No alternate no."}</td>
            <td>{item.fatherContact?item.fatherContact:"no father no."}</td>
            <td>{item.isRegular?"true":"false"}</td>
          </tr>
      ))}
        </tbody>
      </table>      
    </>
  )
}

export default OwnAPIcall
