import { createContext, useContext, useState } from "react";
import { allProducts } from "../assets/data";

// إنشاء Context
const CartContext = createContext();

// مقدم السياق (Provider) 
// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [allItems, setallItems] = useState([]);

  // دالة لتحديث الحالة
  const setItems = () => {
    setallItems(allProducts);
  };



  const addToCart =(item)=>{

    setallItems((prevItems) => {
      return prevItems.map((prevItem)=>{
        if(prevItem.inCart){
        return prevItem 
       }
       return prevItem.id === item.id ?{...prevItem, inCart:true }: prevItem
      })
    })
  }

  
  const removeFromCart =(item)=>{
    setallItems((prevItems) => {
      return prevItems.map((prevItem)=>{
       return prevItem.id === item.id ?{...prevItem, inCart:false , quantity:1 }: prevItem
      })
    })

  }


  const updateQuantity = (cartItem, amount) => { 
    setallItems((prevItems) => { 
      return prevItems.map((item) => {
         return item.id === cartItem.id? {...item, quantity: item.quantity + amount }: item
        })})
        }





  return (
    <CartContext.Provider value={{ allItems, setItems , addToCart , removeFromCart ,updateQuantity}}>
      {children}
    </CartContext.Provider>
  );
};

// هوك لاستهلاك السياق
export const useCart = () => {
  return useContext(CartContext);
};