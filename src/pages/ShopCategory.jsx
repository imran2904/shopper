import React from 'react';
import { ShopContext } from "../context/ShopContext";
import { useContext } from 'react';
import drop_down_icon from '../components/Assets/dropdown_icon.png';
import Item from '../components/item/Item';

const ShopCategory = (props) => {
  const { All_products } = useContext(ShopContext);

  return (
    <div className="container py-4">
      <div className='shop-category'>
        <img className='shopcategory-banner img-fluid' src={props.banner} alt="" />

        <div className="shopcategory-indexshort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="shopcategory-short">
            Sort by <img src={drop_down_icon} alt="" />
          </div>
        </div>
        <div className="row">
          {All_products.map((item, i) => {
            if (props.category === item.category) {
              return (
                <div key={i} className="col-lg-3 col-6">
                  <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                </div>
              );
            }
          })}
        </div>

        <div className="shopcategory-loadmore">
          EXPLORE MORE
        </div>
      </div>
    </div>
  );
}

export default ShopCategory;
