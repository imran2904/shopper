import React, { createContext } from "react";
import All_products from '../components/Assets/all_product'

export const ShopContext= createContext(null);

const ShopContextProvider=(props) =>{
    const contextvalue={All_products};
    return(
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    )
} 
export default ShopContextProvider