import React from 'react'

function KeyAndObject02() {
    const IPLTeams = ["mi","csk","rcb","mi"]
    Object.keys(IPLTeams).forEach((i)=>{
        console.log(i);
    })

    const result =IPLTeams.map((ipl,index)=>
        <h1 key={index}> {index} {ipl}</h1>
    )
  return (
    <div>
        <h1>{result}</h1>

    </div>
  )
}

export default KeyAndObject02
