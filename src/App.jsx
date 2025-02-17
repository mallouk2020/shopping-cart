
import { useEffect } from 'react'
// import { allProducts } from './assets/data'
import Cartitems from './component/cartitems'
import { useCart } from './context/cartcontext'

function App() {
const {allitems , setItems }= useCart()


useEffect(()=>{
  setItems()
},[])


useEffect(()=>{
console.log(allitems)
},[allitems])


  return (
    <>
      <div className='grid place-items-center py-20'>
        <h1 className='text-5xl italic text-gray-500 mb-16'>great shopping cart </h1>
        <div className="grid grid-cols-3 place-items-start gap-10">


          {allitems.map((item) => {
            return(<Cartitems key={item.id} item={item}/> )
            
          })}

        </div>
      </div>
    </>
  )
}

export default App
