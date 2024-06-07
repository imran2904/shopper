import React from 'react'
import exclusive_offer from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className="container-fluid py-3" style={{ backgroundImage: "linear-gradient(180deg,#fde1ff, #e1ffea22)" }}>
      <div className="container py-5">
        <div className='row'>
          <div className="col-lg-8 col-12 text-center text-lg-start">
            <h1 className='fw-bold display-3 '>Exclusive</h1>
            <h1 className='fw-bold display-3'>Offers For You</h1>
            <p className='text-muted fs-4 '>ONLY ON BEST SELLERS PRODUCTS</p>
            <button className='btn btn-danger px-5 py-3 fw-bold'>Check Now</button>
          </div>
          <div className="col-lg-4 d-none d-lg-block ">
            <img src={exclusive_offer} alt="" className='img-fluid' />
          </div>
        </div>
      </div>

    </div>


  )
}
export default Offers
