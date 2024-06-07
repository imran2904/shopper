import React from 'react'
const Item = (props) => {
    return (
            <div class="card mt-2 mb-3" >
                <span class="position-absolute start-100  translate-middle badge rounded-pill bg-light" style={{ margin: '-22px', marginTop: '30px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                    </svg>
                </span>
                <img src={props.image} alt="" />
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text"><span className='fw-bold'>${props.new_price}</span>   <del className='text-muted ms-2'> ${props.old_price}</del> </p>
                    <a href="#" className='btn btn-dark'>Add to Cart</a>
                </div>
            </div>
    )
}
export default Item;