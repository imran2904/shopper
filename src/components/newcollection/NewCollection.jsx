import React from 'react';
import Item from '../item/Item';
import new_collection from '../Assets/new_collections';

const NewCollection = () => {
  return (
    <div className="container py-5">
      <div className='newcollection'>
        <h1 className='text-center'>NEW COLLECTION</h1>
        <hr className='m-auto w-25 opacity-100 mb-5'/>
        <div className='row'>
          {new_collection.map((item, i) => (
            <div key={i} className='col-lg-3 col-6'>
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

export default NewCollection;
