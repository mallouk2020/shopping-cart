// import React from 'react'

import { useEffect, useState } from "react"
import { useCart } from "../context/cartcontext"
import Cartitems from "./cartitems"
function ShoppingCart() {
    const [isOpen, setisOpen ] = useState(false)
    const [cartItems, setcartItems ] = useState([])
    const [totalprice, settotalprice]= useState(0)

    const {allItems}= useCart()

    useEffect(()=>{
        const incartitems = allItems.filter((item)=>item.inCart)
        setcartItems(incartitems)
        console.log("updeted",incartitems )


        const price = incartitems.reduce((accumulator, item) =>{
            return(accumulator += item.price * item.quantity)
            
        },0)
        const roundedPrice = parseFloat(price.toFixed(2));
        settotalprice(roundedPrice);
    },[allItems])




    return (
        <>{cartItems.length> 0 && 
        <div className={`w-[300px] h-screen bg-white/50 backdrop-blur-md fixed right-0 top-0 z-30 border-l-4 rounded-tl-lg ${isOpen ? 'w-[300px]' : 'w-[0px]'}`}>
            <div className='w-full h-16 bg-white  absolute left-0 top-0 z-10 grid place-items-center border rounded-lg'>
                <h1 className="text-xl text-gray-600"> shopping cart </h1>

                <button className={`w-9 h-9 bg-yellow-400  absolute right-3 z-20 grid border-2 rounded-full place-items-center hover:bg-yellow-500  ${!isOpen && 'hidden '}`}
                    onClick={() =>{ setisOpen(false)} }>

                    <img width={20} src="https://cdn-icons-png.flaticon.com/128/1828/1828744.png" alt="cart" />
                </button>

                <div>
                    <button className={`w-9 h-9 bg-yellow-400  absolute -left-14 top-3 z-20 grid border-2 rounded-full place-items-center hover:bg-yellow-500 ${isOpen && 'hidden '}`}
                    onClick={() =>{ setisOpen(true)} }>
                        <img width={20} src="https://cdn-icons-png.flaticon.com/128/5337/5337564.png" alt="" />
                    </button>
                    <span className={`w-5 h-5 bg-pink-700 absolute -left-9 bottom-9 z-30  text-sm rounded-full text-white border-gray-400 grid place-items-center ${isOpen && 'hidden '}`}>{cartItems.length==9 ?"9":cartItems.length}</span>
                </div>


            </div>
            <div className="h-screen flex flex-col gap-y-3  overflow-y-scroll px-5 pb-24 pt-20">
                {cartItems?.map((item)=>{return <Cartitems  fromcart={true} item={item} key={item.id}/> })}</div>


            <div className="w-full h-20 bg-white absolute bottom-0 left-0 z-10 grid place-items-center border rounded-lg">
                <h1 className=" text-xl text-gray-700">total price:{totalprice}</h1>
                <button className=" w-auto h-7 text-white bg-blue-400  border rounded-lg px-3  hover:bg-blue-500">buy now</button>
            </div>

        </div>}
        
        </>
    )
}

export default ShoppingCart
