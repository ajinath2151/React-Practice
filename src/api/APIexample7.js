import { tr } from 'date-fns/locale';
import React, { useEffect, useState } from 'react'

const APIexample7 = () => {
   
   const [data,setData] = useState([]);
    useEffect(()=>{
        fetch("https://random-data-api.com/api/v2/users?size=5&is_xml=true")
        .then((result)=>{
            result.json().then((response)=>{
                setData(response)
            });
        });
    });
    console.log(data);
  return (
    <div>
        <h1>Random Data API with sub array data</h1>
      <table>
        <tbody>
        <th>
            <tr>
                <td>Id</td>
            </tr>
        </th>                
        <th>
            <tr>
                <td>First Name</td>
            </tr>
        </th>
        <th>
            <tr>
                <td>Last Name</td>
            </tr>
        </th>             
        <th>
            <tr>
                <td>Key skill</td>
            </tr>
        </th>             
        <th>
            <tr>
                <td>City</td>
            </tr>
        </th>             
        <th>
            <tr>
                <td>Credit card number</td>
            </tr>
        </th>             
        <th>
            <tr>
                <td>Subscription Status</td>
            </tr>
        </th>             
            
                {data?.map((item,index)=>(
                    <tr key={index}>
                        <td>{item.id}</td>                                                 
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>                        
                        <td>{item.employment.key_skill}</td>                        
                        <td>{item.address.city}</td>                        
                        <td>{item.credit_card.cc_number}</td>                        
                        <td>{item.subscription.status}</td>                        
                        
                    </tr>
                ))}
            
        </tbody>
      </table>
    </div>
  )
}

export default APIexample7
