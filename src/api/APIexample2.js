import { tr } from 'date-fns/locale';
import React, { useEffect, useState } from 'react'

const APIexample2 = () => {

    const [data, setData] = useState();
    
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
        .then((result)=>{
            result.json().then((response)=>{
                setData(response)
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
                        <td>Album Id</td>
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
                        <td>URL</td>
                    </tr>
                </th>                
                <th>
                    <tr>
                        <td>Thumbnail URL</td>
                    </tr>
                </th>                
                {data?.map((element,index)=>(
                    <tr key={index}>
                        <td>{element.albumId}</td>
                        <td>{element.id}</td>
                        <td>{element.title}</td>
                        <td>{element.url}</td>
                        <td>{element.thumbnailUrl}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
 )
}

export default APIexample2
