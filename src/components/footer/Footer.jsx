import React from 'react'
import footer_icon from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
 const Footer = () => {
  return (
    <div className="container-fluid" style={{backgroundImage: 'linear-gradient(360deg, #fde1ff, #e1ffea22)'}}>
    <div className='py-3 px-2'>
        <div className="text-center">
            <a href="#" className='text-decoration-none'><img src={footer_icon} alt="" />
            <p className='fw-bold text-dark'>SHOPPER</p></a>
        </div>
        <ul className='list-unstyled d-flex justify-content-center'>
            <li className='me-3'><a href="#" className='text-decoration-none text-dark'>Compnay</a></li>
            <li className='me-3'><a href="#" className='text-decoration-none text-dark'>Products</a></li>
            <li className='me-3'><a href="#" className='text-decoration-none text-dark'>Offices</a></li>
            <li className='me-3'><a href="#" className='text-decoration-none text-dark'>About</a></li>
            <li className='me-3'><a href="#" className='text-decoration-none text-dark'>Contact</a></li>
        </ul>
        <div className="justify-content-center d-inline-block d-flex ">
            <a href="#" className='border p-1 me-2 shadow'><img src={instagram_icon} alt="" /></a>
            <a href="#"className='border p-1 me-2 shadow'><img src={pintester_icon} alt="" /></a>
            <a href="#" className='border p-1 me-2 shadow'><img src={whatsapp_icon} alt="" /></a>
        </div>
        <div className="text-center">
            <hr></hr>
            <p>Copyright @ 2024 - All Right Reserved </p>
        </div>
    </div>
 </div>
  )
}
export default Footer
