// import React from 'react'

import CartButtons from "./CartButtons";




// eslint-disable-next-line react/prop-types
const Cartitems = ( {item,fromcart} ) => {
    
    // eslint-disable-next-line react/prop-types
    const { name, price ,imageUrl , id, } = item; 
    return (
      <div key={id} 
      className="group relative flex flex-col gap-y-2 border border-zinc-200 rounded-md bg-white p-24 ">

        <img src={imageUrl}
         alt="img" 
         width={300}
         height={300}
         className="group-hover:-translate-y-2 transition-all duration-500 "
         />
         <div className="absolute bottom-5 left-5">
            <h1 className="text-gray-900 text-sm">{name}</h1>
            <span className=" text-pink-500 text-sm">${price}</span>
         </div>
         {/* {console.log(item.inCart)} */}
         <CartButtons item={item} fromcart={fromcart}/>
        
      </div>
    );
  };
  
  export default Cartitems;
