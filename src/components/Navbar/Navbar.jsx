import React, { useRef, useState } from 'react'
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';
import { SlBasket } from "react-icons/sl";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <>
    
      {/*navbar */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top p-0 shadow">
        <div class="container">
          <Link class="navbar-brand" className='text-decoration-none d-flex' to="/"> <img src={logo} alt="logo" className='img-fluid w-50' /><p className='text-muted  w-50'>SHOPPER</p></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active me-3 ms-lg-5">
                <Link class="nav-link" onClick={() => { setMenu("shop") }} to="/">Shop</Link>{menu === "shop" ? <hr className='m-0' /> : <></>}
              </li>
              <li class="nav-item me-3">
                <Link onClick={() => { setMenu("mens") }} class="nav-link" to="/mens">Men</Link>{menu === "mens" ? <hr className='m-0' /> : <></>}
              </li>
              <li class="nav-item me-3">
                <Link onClick={() => { setMenu("womens") }} class="nav-link" to="/womens">WoMen</Link>{menu === "womens" ? <hr className='m-0' /> : <></>}
              </li>
              <li class="nav-item me-3">
                <Link onClick={() => { setMenu("kids") }} class="nav-link" to="/kids">Kids</Link>{menu === "kids" ? <hr className='m-0' /> : <> </>}
              </li>
            </ul>
            <div className="ms-auto d-flex position-relative mb-1">
              <Link to='/login'><button className='btn me-2' style={{ backgroundColor: 'pink' }}>Login</button></Link>
              <SlBasket size={20}/>
              <div className="nav-cart-counter">0</div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;