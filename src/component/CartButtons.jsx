// import React from 'react'

import { useCart } from "../context/cartcontext"

// eslint-disable-next-line react/prop-types
const CartButtons = ({item}) => {

   
      
    
    // eslint-disable-next-line react/prop-types
    const {inCart , quantity} =item
    const { addToCart } = useCart()
    return (
        <div className='w-max absolute right-5 top-5'>
            <div className='space-x-3'>

                {!inCart? (<button
                    className='bg-zinc-400 border rounded-md px-2  py-1 text-sm text-white
            hover:bg-zinc-500 transition-colors'
                    onClick={() => {addToCart(item); console.log(inCart)}} > +add to cart</button>
            ) :
                    (<div>
                     <div className="flex items-center space-x-2">
  {/* زر تقليل الكمية */}
  <button className="border rounded-md w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
    -
  </button>

  {/* عرض الكمية */}
  <span className="bg-green-100 border text-sm font-medium rounded-full px-3 py-1">
    {   quantity || 1}
  </span>

  {/* زر زيادة الكمية */}
  <button className="border rounded-md w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
    +
  </button>

  {/* نص "in cart" */}
  <span className="text-xs text-gray-500 ml-1">in cart</span>

  {/* زر إزالة العنصر من السلة */}
  <button className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-md ml-2 hover:bg-red-600 transition-colors">
    Remove
  </button>
</div>

                    </div>)}

            </div>
        </div>
    )
}

export default CartButtons
