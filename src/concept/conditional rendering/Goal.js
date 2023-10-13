import React from 'react'
import HitGoal from './HitGoal';
import MissGoal from './MissGoal';

const Goal = () => {
    let age = prompt("your age?");
    return (
        <>
             {age < 30 ? <HitGoal /> : <MissGoal />}             
        </>
  )
}

export default Goal
