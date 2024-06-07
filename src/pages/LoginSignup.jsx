import React, { useState } from 'react'
// import './css/LoginSignup.css'
const LoginSignup = () => {
  const [state , setState]=useState("Login");
  
  return (
    <div className='container mt-5 mb-4 justify-content-center'>
      <div className="container w-50 border  shadow rounded-3 p-3">
      
        <h1 className='text-center mb-3 text-uppercase text-decoration-underline' >{state}</h1>
        
        <div className="login-signup-fields">
          {state==='Sign Up'?<input type="text" className='form-control mb-3' placeholder='Your Name' />:<></>}
          <input type="email" className='form-control mb-3' placeholder='Email Address' required />
          <input type="password" className='form-control mb-3' placeholder='Password' required/>
        </div>
        
        <a type='submit' href='#' className='btn btn-warning w-100 mb-3 py-2'>Continue</a>
        {state==='Sign Up'?
        <p className='login-signup-login'>Already have an Account ?
        <span onClick={()=>{setState("Login")}} className='text-primary ms-1' style={{cursor: "pointer"}}>Login here</span></p>:
        <p className='login-signup-login'>Create an Account ?
        <span onClick={()=>{setState("Sign Up")}} className='text-primary ms-1' style={{cursor: "pointer"}}>Click here</span></p>}
        
        
      <div className="d-line-block">
        <input type="checkbox" className='form-control-input me-2' name='' id='' />
        <span>
          By continuing ,i agree to the <a href='#' className=''>terms of use and privecy policy</a> .  
        </span>
      </div>
      
      </div>
    </div>
  )
}
export default LoginSignup;
