import React from 'react' 
import firebase from './firebase';


const EmailVerification = () => {

  
  const handleClick = ()=>{
    let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
    let number = "+919922245153";
    firebase.auth().signInWithPhoneNumber(number,recaptcha).then(function(e){
      let code = prompt("enter the otp",'')
      if(code==null) return;
      e.confirm(code).then(function(result){
        console.log(result.user,'user');
        document.querySelector('label').textContent=result.user.phoneNumber + " Number Verified..";
      })
      .catch((error)=>{
        console.log(error);
      })
    })
  }
  
  return (
    <div>
      <label htmlFor=""></label>
      <button onClick={handleClick}>Click here</button>
    </div>
    
  )
}

export default EmailVerification
