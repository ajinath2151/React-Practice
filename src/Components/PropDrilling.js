import React, { useState } from 'react'

const PropDrilling = () => {

    const [fname, setFname] = useState("ajinath");
    const [lname, setLname] = useState("shinde patil");
  return (
        <div>
        <h4>Prop Drilling - prop Drilling occur when parent component generate it's state and pass down it to it's child component that do not consume props</h4>      
        <h1 style={{color:'red'}}>this is a parent component</h1>
        <h2 dangerouslySetInnerHTML={{ __html:`first Name : ${fname} <br> last name : ${lname}`}}></h2>        
        <ChildComponent1 fname={fname} lname={lname} />
    </div>
  )
}

const ChildComponent1 = ({fname,lname}) => {
    return (
        <>
        <h1 style={{color:'green'}}>child component 1</h1>
        <ChildComponent2 fname={fname} lname={lname} />
        </>
    )
}
const ChildComponent2 = ({fname,lname}) => {
    return (
        <>
        <h1 style={{color:'orange'}}>child component 2</h1>
        <ChildComponent3 fname={fname} lname={lname} />
        </>
    )
}

const ChildComponent3 = ({fname,lname}) => {
    return (
        <>
        <h1 style={{color:'purple'}}>child component 3</h1>        
        <h2 dangerouslySetInnerHTML={{ __html:`first Name : ${fname} <br> last name : ${lname}`}}></h2>        
        </>
    )
}
export default PropDrilling