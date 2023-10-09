import React, { useEffect, useState } from 'react'

const APIexample8 = () => {

    const [data, setData] = useState(null);

    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        .then((result)=>{
            result.json().then((response)=>{
                setData(response);
            })
        });
    });
    console.log(data);
  return (
    <>
       {/* <h1>{data.name}</h1>
      <img src={data.sprites.front_default} alt={data.name} />
      <h2>Abilities:</h2> */}
      <ul>
        {data?.abilities.map((ab, index) => (
          <li key={index}>{ab.ability.name} 
          {ab.ability.is_hidden?"true":"false"}
        </li>
        //   <li key={index}></li>
        ))}
      </ul>            

      <ul>
        {data?.moves.map((ab1, index) => (
          <li key={index}>{ab1.moves.name} 
          {ab1.moves1.url}
        </li>
        //   <li key={index}></li>
        ))}
      </ul>            
    </>
  )
}

export default APIexample8
