import { createContext, useContext, useState } from "react";
import { allProducts } from "../assets/data";

// إنشاء Context
const CartContext = createContext();

// مقدم السياق (Provider) 
// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [allitems, setAllitems] = useState([]);

  // دالة لتحديث الحالة
  const setItems = () => {
    setAllitems(allProducts);
  };



  const addToCart =(item)=>{

    setAllitems((prevItems) => {
      return prevItems.map((prevItem)=>{
        if(prevItem.inCart){
        return prevItem 
       }
       return prevItem.id === item.id ?{...prevItem, inCart:true }: prevItem
      })
    })
  }

  // const addToCart = (item) => {
  //   setAllitems((prevItems) => {
  //     // البحث عن العنصر في القائمة بناءً على ID
  //     const isItemInCart = prevItems.some((prevItem) => prevItem.id === item.id);
  
  //     if (isItemInCart) {
  //       // إذا كان العنصر موجودًا بالفعل، ارجع القائمة كما هي
  //       return prevItems.map((prevItem) =>
  //         prevItem.id === item.id
  //           ? { ...prevItem, quantity: (prevItem.quantity || 1) + 1 } // زيادة الكمية إذا كانت موجودة
  //           : prevItem
  //       );
  //     } else {
  //       // إذا كان العنصر غير موجود، أضفه مع تعيين inCart=true وquantity=1
  //       return [
  //         ...prevItems,
  //         { ...item, inCart: true, quantity: 1 },
  //       ];
  //     }
  //   });
  // };




  return (
    <CartContext.Provider value={{ allitems, setItems , addToCart}}>
      {children}
    </CartContext.Provider>
  );
};

// هوك لاستهلاك السياق
export const useCart = () => {
  return useContext(CartContext);
};