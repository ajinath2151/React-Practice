import {React , useState}from 'react'

const ChildComponent03 = (props) => {

    const [fname, setFname] = useState('');

  //   const handleSubmit = (e) => { 
  //   e.preventDefault();
  //   props.getData(fname);
  //  }
    const handleClick = (e) => { 
    e.preventDefault();
    props.getData(fname);
   }
  return (
    <div>
      <form action="">
      {/* <form onSubmit={handleSubmit} action=""> */}
        <h1>
        <input type="text" name="" value={fname} id="" onChange={(e)=>{setFname(e.target.value)}} />
        {/* <button>Submit</button> */}
        <button onClick={handleClick}>Submit</button>
        </h1>
            
      </form>
    </div>
  )
}

export default ChildComponent03
