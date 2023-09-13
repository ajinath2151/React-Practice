import React from 'react'

const ListAndKeys = () => {

    const ipl = ['csk','mi','rcb','mi']
  return (
    <div>        
           {ipl.map((team,index)=>
            <h1 key={index}>
               {index} : {team}
           </h1>
           )}        
    </div>
  )
}

export default ListAndKeys
