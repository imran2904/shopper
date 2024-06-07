import React from 'react'
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';
const Hero = () => {
    return (
        <div className="container-fluid d-flex" style={{backgroundImage: 'linear-gradient(180deg, #fde1ff, #e1ffea22)'}}>
            <div className="container mt-4 mb-3">
                <div className='row p-2'>
                    <div className="col-lg-6 col-12 text-center text-lg-start mt-lg-4 lh-lg ">
                        <span className='mt-2'>New Arrivels Only </span>
                        <div>
                            <div className="d-inline-flex text-center position-relative mt-2">
                                <h1 className='fw-bold'>New</h1>
                                <img style={{ width: "60px" }} src={hand_icon} alt="" />
                            </div>
                            <h1 className='fw-bold mt-1 mb-2' >collections</h1>
                            <h1 className='fw-bold '>for everyone</h1>
                        </div>
                        <div className="mt-4">
                            <button className='btn btn-danger p-3 w-50 rounded-pill'>Latest collection <img src={arrow_icon} alt="" /></button>
                        </div>
                    </div>
                    <div className="col-lg-6 d-none d-lg-block">
                        <div className="float-end">
                            <img style={{ width: "360px" }} src={hero_image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero;