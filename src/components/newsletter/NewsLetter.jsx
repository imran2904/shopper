import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <>
    <div className="container-fluid" style={{ backgroundImage: "linear-gradient(#fde1ff 0%, #e1ffea22 60%)" }}>
      <div className="container text-center py-5" style={{ backgroundImage: "linear-gradient(#fde1ff 0%, #e1ffea22 60%)" }}>
        <h1>Get Exculusive Offers On Your Email</h1>
        <span>Subscribe to our newsletter and stay updated </span>
        <div className="mt-4 m-auto d-flex rounded-pill border w-75" style={{ alignItems: "center" }}>
          <input type="email" placeholder="Your Email id" className="ms-3 text-light-emphasis form-control border-0" style={{ fontFamily: "Poppins" }} />
          <input type="submit" value="Subscribe" className="btn Custombtn rounded-pill btn-dark px-lg-5 py-lg-4" />
        </div>
      </div>
    </div>
    </>
  )
}
export default NewsLetter