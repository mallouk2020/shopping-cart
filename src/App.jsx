
import { useEffect } from 'react'
// import { allProducts } from './assets/data'
import Cartitems from './component/cartitems'
import { useCart } from './context/cartcontext'
import ShoppingCart from './component/ShoppingCart'

function App() {
const {allItems , setItems }= useCart()


useEffect(()=>{
  setItems()
},[])


useEffect(()=>{
console.log(allItems)
},[allItems])


  return (
    <>
    <div className="grid place-items-center py-20">
      {/* عنوان الصفحة */}
      <h1 className="text-4xl sm:text-5xl italic text-gray-500 mb-16">
        Great Shopping Cart
      </h1>
  
      {/* عربة التسوق */}
      <ShoppingCart />
  
      {/* قائمة المنتجات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-start gap-10 w-full px-4">
        {allItems.map((item) => (
          <Cartitems key={item.id} item={item} />
        ))}
      </div>
    </div>
  </>
  )
}

export default App
