import React from 'react';
import data_product from '../Assets/data';
import Item from '../item/Item';

const Popular = () => {
  return (
    <div className="container py-5">
      <div className='popular'>
        <h1 className='text-center'>POPULAR IN WOMEN</h1>
        <hr className='m-auto w-25 opacity-100 mb-4'/>
        <div className="row">
          {data_product.map((item, i) => (
            <div key={i} className="col-lg-3 col-6">
              <Item
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
