import { React , useEffect } from 'react'

const DetectWhichKeyIsPressed = () => {

    useEffect(()=>{
        document.addEventListener('keydown', HandleKeyPress, true);
    },[])

    const HandleKeyPress = (e) => {
        e.preventDefault();
        console.log("clicked : " + e.key);
        if (e.key===" ") {
            console.log("space bar");            
        }
    }

  return (
    <div>
      <h2>Detect which key press by user</h2>

    </div>
  )
}

export default DetectWhichKeyIsPressed
