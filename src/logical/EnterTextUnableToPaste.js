import React from 'react'

const EnterTextUnableToPaste = () => {

    const RestrictCopyPaste = (e)=>{
        e.preventDefault();
        return false;
    }
  return (
    <>
        <h3>Only allow to enter text restrict from copy and past user can use to re-enter or confirm password</h3>         
        <div className="information">
        &nbsp;<label For="firstName">First Name  </label> &nbsp; 
        <input type="text" name="" id="firstName" onPaste={RestrictCopyPaste} onCopy={RestrictCopyPaste} />
        </div>
    </>
  )
}

export default EnterTextUnableToPaste
